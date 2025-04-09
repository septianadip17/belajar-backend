// // filename: connection.js

// // import mongoose
// const mongoose = require("mongoose");

// // connection to mongodb
// const connectDB = async () => {
//   try {
//     // url to database
//     const con = await mongoose.connect("mongodb://localhost:27017/StudyCase", {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });
//     // log connection
//     console.log(`MongoDB Connected: ${con.connection.host}`);
//   } catch (err) {
//     // log error
//     console.log(err);
//     // shutdown servers
//     process.exit(1);
//   }
// };

// // export connection
// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect('mongodb://localhost:27017/StudyCase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log(`MongoDB connected: ${con.connection.host}`);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;