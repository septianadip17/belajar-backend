var express = require("express");
var router = express.Router();

// import userSchema
const User = require("../models/userSchema");

// Login page
router.get("/login", function (req, res, next) {
  res.render("login", { title: "Login Page" });
});

// Registration page
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register Page" });
});

// Post registration
router.post("/register", (req, res, next) => {
  const { name, email, password, password2 } = req.body;
  console.log(req.body);
  let errors = [];
  // Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "All fields are required" });
    console.log("All fields are required");
  }
  // Check passwords match
  if (password !== password2) {
    console.log("Passwords do not match");
    errors.push({ msg: "Passwords do not match" });
  }
  // Check password length
  if (errors.length > 0) {
    res.render("register", {
      errors,
      name,
      email,
      password,
      password2,
    });
  } else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push({ msg: "Email already exists" });
        res.render("register", {
          errors,
          name,
          email,
          password,
          password2,
        });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        newUser
          .save()
          .then((user) => {
            console.log(user);
            console.log("User registered");
            res.redirect("/auth/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }
});

// logout
router.get("/logout", function (req, res) {
  res.redirect("/"); 
});

module.exports = router;
