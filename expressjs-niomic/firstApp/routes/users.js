var express = require("express");
var router = express.Router();

// Login page
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login Page" });
});

// Registration page
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register Page" });
});

module.exports = router;
