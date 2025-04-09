var express = require("express");

var router = express.Router();

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
router.post("/create", function (req, res) {});
// action update movie
router.put("/update/:movieId", function (req, res) {});
// action delete movie
router.delete("/delete/:movieId", function (req, res) {});

module.exports = router;