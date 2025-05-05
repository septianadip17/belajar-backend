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

app.post("/postData", (req, res) => {
  const { name, id } = req.body;
  const insert_query = "INSERT INTO demotable (name, id) VALUES ($1, $2)";

  con.query(insert_query, [name, id], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send("data inserted");
    }
  });
});

app.listen(3000, () => {
  console.log("server is running...");
});
con.connect().then(() => console.log("connected"));
