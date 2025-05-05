const { Client } = require("pg");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public")); // Serve HTML/CSS/JS files

const con = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root123",
  database: "demopost",
});

// KONEKSI DB
con
  .connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err));

// CREATE
app.post("/postData", (req, res) => {
  const { name, id, address } = req.body;
  const insert_query =
    "INSERT INTO demotable (name, id, address) VALUES ($1, $2, $3)";
  con.query(insert_query, [name, id, address], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Insert error");
    } else {
      res.send("Data inserted");
    }
  });
  if (!name || !id || !address) {
    return res.status(400).send("Semua field wajib diisi");
  }
  
});

// READ ALL
app.get("/fetchData", (req, res) => {
  const fetch_query = "SELECT * FROM demotable";
  con.query(fetch_query, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Fetch error");
    } else {
      res.json(result.rows);
    }
  });
});

// READ ONE BY ID
app.get("/fetchById/:id", (req, res) => {
  const { id } = req.params;
  const fetch_query = "SELECT * FROM demotable WHERE id = $1";
  con.query(fetch_query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Fetch by ID error");
    } else {
      res.json(result.rows[0]);
    }
  });
});

// UPDATE
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, address } = req.body;
  const update_query =
    "UPDATE demotable SET name = $1, address = $2 WHERE id = $3";
  con.query(update_query, [name, address, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Update error");
    } else {
      res.send("Data updated");
    }
  });
});

// DELETE
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const delete_query = "DELETE FROM demotable WHERE id = $1";
  con.query(delete_query, [id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Delete error");
    } else {
      res.send("Data deleted");
    }
  });
});

// START SERVER
app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
