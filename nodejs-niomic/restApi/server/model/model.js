// filename: model.js

// import mongoose and initialize schema
const mongoose = require("mongoose");
Schema = mongoose.Schema;

// import bcrypt and setup bcrypt_round
const bcrypt = require("bcrypt");
bcrypt_round = 5;

// import validator
const validator = require("validator");

// data user
const user_schema = new Schema({
  username: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (str) {
        return validator.isEmail(str);
      },
      message: "Email is not valid",
    },
  },
  date_joined: {
    type: Date,
    default: Date.now(),
  },
});

// encript password before save
user_schema.pre("save", function (next) {
  const user = this;
  if (user.isModified("password")) {
    bcrypt.genSalt(bcrypt_round, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else return next();
});

// password encription before update
user_schema.pre("findOneAndUpdate", async function (next) {
  try {
    if (this._update.password) {
      const hashed = await bcrypt.hash(this._update.password, bcrypt_round);
      this._update.password = hashed;
    }
    next();
  } catch (err) {
    return next(err);
  }
});

// password checking with bcrypt compare
user_schema.method.isPassMatch = function (pass, callback) {
  bcrypt.compare(pass, this.password, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

module.exports = mongoose.model("User", user_schema);
