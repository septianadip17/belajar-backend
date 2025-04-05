// import express from "express";
const express = require("express");

// import mongoose
const mongoose = require("mongoose");

// import body-parser
const bodyParser = require("express");

// initialize express app
const app = express();

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/resthub");
const db = mongoose.connection;

// set port
const port = 8000;

// import api routes
const apiRouter = require("./api-routes");

// setup default url
app.get("/", (req, res) => {
  res.send(
    "Hallo, selamat anda telah berhasil membuat webserver express js dengan nodemon"
  );
});

// api routes ke url /api
app.use("/api", apiRouter);

// launch app  with info at console log
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
