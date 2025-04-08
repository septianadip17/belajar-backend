// Import Student Model
const Student = require("./studentModel");

// Handle index actions
exports.index = async function (req, res) {
  try {
    const students = await Student.get();
    res.json({
      status: "success",
      message: "students retrieved successfully",
      data: students,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err.message,
    });
  }
};

// Handle create student actions
exports.new = async function (req, res) {
  try {
    console.log("Request body:", req.body);
    let student = new Student();
    student.name = req.body.name;
    student.dateOfBirth = req.body.dateOfBirth;
    student.gender = req.body.gender;
    student.hobby = req.body.hobby;
    const savedStudent = await student.save();
    res.json({
      status: "success",
      message: "student added successfully",
      student: savedStudent, 
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Some error occurred while creating the contact.",
    });
  }
};

// Handle view contact info
exports.view = async function (req, res) {
  try {
    const student = await Student.findById(req.params.student_id);
    res.json({
      message: "Student details loading..",
      data: student,
    });
  } catch (err) {
    res.send(err);
  }
};

// Handle update contact info
exports.update = async function (req, res) {
  try {
    const student = await Student.findById(req.params.student_id);
    if (!student) {
      return res.status(404).json({
        status: "error",
        message: "Student not found",
      });
    }
    student.name = req.body.name;
    student.gender = req.body.gender;
    student.email = req.body.email;
    student.phone = req.body.phone;
    const updatedStudent = await student.save();
    res.json({
      status: "success",
      message: "Student Info updated",
      contact: updatedStudent,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message || "Error updating student information",
    });
  }
};

// Handle delete student
exports.delete = async function (req, res) {
  try {
    await Student.deleteOne({ _id: req.params.contact_id });
    res.json({
      status: "success",
      message: "Contact deleted",
    });
  } catch (err) {
    res.send(err);
  }
};

// Handle create multiple students
exports.newBatch = async function (req, res) {
  try {
    console.log("Request body:", req.body);
    const students = await Student.insertMany(req.body);
    res.json({
      message: "Multiple students created successfully!",
      data: students,
    });
  } catch (err) {
    console.error("Error:", err);
    res.json(err);
  }
};
