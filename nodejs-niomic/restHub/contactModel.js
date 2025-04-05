// contactModel.js
const mongoose = require("mongoose");

// setup schema
const contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: String,
  phone: Number,
  create_date: {
    type: Date,
    default: Date.now,
  }
})

// export contact model
const Contact = module.exports = mongoose.model("contact", contactSchema);
module.exports.get = function (callback, limit) {
  Contact.find(callback).limit(limit);
}