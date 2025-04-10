var express = require("express");
var router = express.Router();
var Movie = require("../models/movieSchema");

// get all movies
router.get("/", function (req, res, next) {
  res.render("movie/allMovies", { title: "All Movies Page" });
});

// create new movie
router.get("/create", function (req, res, next) {
  res.render("movie/createMovie", { title: "Create Movie Page" });
});

// update movie
router.get("/update/:movieId", function (req, res, next) {
  res.render("movie/updateMovies", {
    title: "Update Movie Page",
    movieId: req.params.movieId,
  });
});

// action create movie
router.post("/create", function (req, res) {
  const { name, date } = req.body;  
  let errors = [];
  if (!name || !date) {
    errors.push({ msg: "Please fill in all fields" });
  }
  if (errors.length > 0) {
    res.render("movie/createMovie", {
      errors,
    });
  } else {
    const newMovie = new Movie({
      name,
      released_on: date,
    });
    newMovie
      .save()
      .then((movie) => {
        errors.push({ msg: "Movie added successfully" });
        res.render("movie/createMovie", {
          errors,
        });
      })
      .catch((err) => console.log(err));
  }
});

// action update movie
router.put("/update/:movieId", function (req, res) {});
// action delete movie
router.delete("/delete/:movieId", function (req, res) {});

module.exports = router;
