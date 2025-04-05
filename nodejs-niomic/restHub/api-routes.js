const express = require("express");
const router = express.Router();

app.get("/user", (req, res) => {
  res.send("This is a user request");
});

app.post("/user", (req, res) => {
  res.send("This is a post request");
});

app.put("/user", (req, res) => {
  res.send("This is a put request");
});

app.delete("/user", (req, res) => {
  res.send("This is a delete request");
});

module.exports = router;
