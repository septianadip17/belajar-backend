var express = require("express");
var router = express.Router();

// welcome page
router.get("/", function (req, res, next) {
  res.render("welcome", { title: "Welcome Page" });
});

// dashboard page
router.get("/dashboard", function (req, res, next) {
  res.render("dashboard", { title: "Dashboard Page" });
});
module.exports = router;
