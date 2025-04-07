// api-routes.js

// import express routes
const express = require("express");
const router = express.Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API it's working",
    message: "Welcome to Resthub Backend App"
  }) 
});

// import contact controller
const studentController = require("./studentController");

// contact routes
router.route("/students")
  .get(studentController.index)
  .post(studentController.new);

router.route("/students/:student_id")
  .get(studentController.view)
  .patch(studentController.update)
  .put(studentController.update)
  .delete(studentController.delete); 

  router.route("/students/batch")
    .post(studentController.newBatch);
  // export API routes
module.exports = router;
