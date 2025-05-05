const { Client } = require("pg");
const express = require("express");
const app = express();
app.use(express.json()); 
const con = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root123",
  database: "demopost",
});

con.connect().then(() => console.log("connected"));
