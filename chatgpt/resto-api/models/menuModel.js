const pool = require("../db");

// ambil semua menu
const getAllMenu = async () => {
  const result = await pool.query("SELECT * FROM menu");
  return result.rows;
};

// tambah menu baru
const addMenu = async (name, price, category) => {
  const result = await pool.query(
    "INSERT INTO menu (name, price, category) VALUES ($1, $2, $3) RETURNING *",
    [name, price, category]
  );
  return result.rows[0];
};

// update menu
const updateMenu = async (id, name, price, category) => {
  const result = await pool.query(
    "UPDATE menu SET name = $1, price = $2, category = $3 WHERE id = $4 RETURNING *",
    [name, price, category, id]
  );
  return result.rows[0];
};

module.exports = {
  getAllMenu,
  addMenu,
  updateMenu,
};
