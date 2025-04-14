const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // koneksi ke PostgreSQL
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// GET semua menu
app.get("/menu", async (req, res) => {
  const result = await db.query("SELECT * FROM menu");
  res.json(result.rows);
});

// ✅ POST menu baru
app.post("/menu", async (req, res) => {
  const { name, price, category } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO menu (name, price, category) VALUES ($1, $2, $3) RETURNING *",
      [name, price, category]
    );

    res.status(201).json({
      message: "Menu item added!",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
