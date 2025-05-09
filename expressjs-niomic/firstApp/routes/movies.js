var express = require("express");
var router = express.Router();
var moment = require("moment");
var Movie = require("../models/movieSchema");
const { cekAuth  } = require("../config/auth");

// get all movies
router.get("/", cekAuth, async function (req, res, next) {
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
router.get("/create", cekAuth, function (req, res, next) {
  res.render("movie/createMovie", { title: "Create Movie Page" });
});

// update movie
router.get("/update/:movieId", cekAuth, async function (req, res, next) {
  try {
    const movieInfo = await Movie.findById(req.params.movieId);
    if (movieInfo) {
      var newDate = moment(movieInfo.released_on).format("YYYY-MM-DD");
      console.log("Movie Info:", movieInfo);
      console.log("Formatted Date:", newDate);
      res.render("movie/updateMovies", {
        movies: movieInfo,
        newDate: newDate,
      });
    } else {
      res.status(404).send("Movie not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching movie");
  }
});

// action create movie
router.post("/create", cekAuth,  function (req, res) {
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
router.post("/update/:movieId", cekAuth, async function (req, res) {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.movieId,
      {
        name: req.body.name,
        released_on: req.body.date,
      },
      { new: true }
    );
    if (!updatedMovie) {
      return res.status(404).send("Movie not found");
    }
    const newDate = moment(updatedMovie.released_on).format("YYYY-MM-DD");
    res.render("movie/updateMovies", {
      movies: updatedMovie,
      newDate: newDate,
      errors: [{ msg: "Movie updated successfully" }],
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating movie");
  }
});

// action delete movie
router.get("/delete/:movieId",  cekAuth, async function (req, res) {
  try {
    console.log(req.params.movieId);
    await Movie.findByIdAndDelete(req.params.movieId);
    res.redirect("/movies");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting movie");
  }
});

module.exports = router;
