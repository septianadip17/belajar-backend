var express = require("express");
var router = express.Router();
var Movie = require("../models/movieSchema");

// get all movies
router.get("/", async function (req, res, next) {
  try {
    let ListMovies = [];
    const movies = await Movie.find();
    if (movies.length > 0) {
      for (let data of movies) {
        ListMovies.push({
          id: data._id,
          name: data.name,
          released_on: data.released_on,
        });
      }
    } else {
      ListMovies.push({
        id: "No data",
        name: "No data",
        date: "No data",
      });
    }
    res.render("movie/allMovies", {
      ListMovies,
    });
  } catch (err) {
    console.error(err);
    res.status(500).render("movie/allMovies", {
      ListMovies: [
        {
          id: "Error",
          name: "Error fetching movies",
          date: "Error",
        },
      ],
    });
  }
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
