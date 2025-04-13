const express = require('express');
const pool = require('./db');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint GET /menu
app.get('/menu', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM menu');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
