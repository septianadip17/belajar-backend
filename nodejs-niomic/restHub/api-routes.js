// api-routes.js

// import express routes
const express = require("express");
const router = express.Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API it's working",
    message: "Welcome to Resthub Backend App",
  });
});

// import contact controller
const contactController = require("./contactController");

// contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contacts/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

router.route("/contacts/batch").post(contactController.newBatch);
// export API routes
module.exports = router;
