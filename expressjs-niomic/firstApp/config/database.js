// set up connection to mongoDB
const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost/First_App";
mongoose
  .connect(mongoDB, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"));
mongoose.Promise = global.Promise;

module.exports = mongoose;
