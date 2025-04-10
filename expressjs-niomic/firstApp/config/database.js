// // set up connection to mongoDB
// const mongoose = require("mongoose");

// const mongoDB = "mongodb://localhost/First_App";
// mongoose
//   .connect(mongoDB, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB"));
// mongoose.Promise = global.Promise;

// module.exports = mongoose;


// set up connection to mongoDB
const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost/First_App";
mongoose
  .connect(mongoDB)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB:", err));

module.exports = mongoose;