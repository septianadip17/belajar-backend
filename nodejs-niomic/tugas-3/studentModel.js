// studentModel.js
const mongoose = require("mongoose");

// setup schema
const studentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  gender: String,
  hobby: String,
  create_date: {
    type: Date,
    default: Date.now,
  }
})

// export student model
const Student = module.exports = mongoose.model("student", studentSchema);
module.exports.get = async function (limit) {
  return await Student.find().limit(limit);
} 