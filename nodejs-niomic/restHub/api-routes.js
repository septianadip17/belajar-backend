const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "API it's working",
    message: "Welcome to Resthub Backend App"
  })
});

router.post("/", (req, res) => {
  res.send("Congrats! This is a post request");
});

router.put("/", (req, res) => {
  res.send("Congrats! This is a put request");
});

router.delete("/", (req, res) => {
  res.send("Congrats! This is a delete request");
});

module.exports = router;
