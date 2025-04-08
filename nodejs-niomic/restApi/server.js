// filename: server.js

// import express
const express = require("express");
// import morgan
const morgan = require("morgan");
// import body-parser
const bodyParser = express;

// import connection to mongodb
const connectDB = require("./server/database/connection");

// connection start
connectDB();

// app initiation
const app = express();

// setup port
const PORT = 8080;

// log request
app.use(morgan("tiny"));

// setup body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// load router
app.use("/", require("./server/routes/router"));

// runing server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});