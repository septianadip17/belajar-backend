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

// post data
app.post("/postData", (req, res) => {
  const { name, id } = req.body;
  const insert_query = "INSERT INTO demotable (name, id) VALUES ($1, $2)";
  con.query(insert_query, [name, id], (err, result) => {
    if (err) {
      // console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send("data inserted");
    }
  });
});

// get all data
app.get("/fetchData", (req, res) => {
  const fetch_query = "SELECT * FROM demotable";
  con.query(fetch_query, (err, result) => {
    if (err) {
      // console.log(err);
      res.send("error");
    } else {
      // console.log(result);
      res.send(result.rows);
    }
  });
});

// get data by id
app.get("/fetchById/:id", (req, res) => {
  const { id } = req.params;
  const fetch_query = "SELECT * FROM demotable WHERE id = $1";
  con.query(fetch_query, [id], (err, result) => {
    if (err) {
      // console.log(err);
      res.send("error");
    } else {
      // console.log(result.rows);
      res.send(result.rows[0]);
    }
  })
})

// update data by id
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;
  const update_query = "UPDATE demotable SET name = $1, address = $2 WHERE id = $3";
  con.query(update_query, [name, address, id], (err, result) => {
    if (err) {
      // console.log(err);
      res.send("error");
    } else {
      // console.log(result);
      res.send("data updated");
    }
  })
})

// delete data by id
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const delete_query = "DELETE FROM demotable WHERE id = $1";
  con.query(delete_query, [id], (err, result) => {
    if (err) {
      // console.log(err);
      res.send("error");  
    } else{
      // console.log(result);
      res.send("data deleted");
    }
  })
})

app.listen(3000, () => {
  console.log("server is running...");
});
con.connect().then(() => console.log("connected"));
