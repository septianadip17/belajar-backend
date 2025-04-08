// filename: connection.js

// import mongoose
const mongoose = require("mongoose");

// connection to mongodb
const connectDB = async () => {
  try {
    // url to database
    const con = await mongoose.connect("mongodb://localhost:27017/StudyCase", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    // log connection
    console.log(`MongoDB Connected: ${con.connection.host}`);
  } catch (err) {
    // log error
    console.log(err);
    // shutdown servers
    process.exit(1);
  }
};
