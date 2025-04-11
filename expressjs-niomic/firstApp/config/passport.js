const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/userSchema");

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, function (
      email,
      password,
      done
    ) {
      User.findOne({ email: email })
        .then(async (user) => {
          if (user) {
            if (await bcrypt.compare(password, user.password)) {
              console.log("check" + password, " || ", user.password);
              return done(null, user);
            } else {
              return done(null, false, { message: "Password incorrect" });
            }
          } else {
            return done(null, false, { message: "Email is not registered" });
          }
        })
        .catch((err) => {
          console.log("Internal server error" + err.message);
        });
    })
  );
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });
};
