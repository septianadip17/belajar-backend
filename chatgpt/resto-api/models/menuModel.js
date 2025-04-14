const pool = require('../db');

// ambil semua menu
const getAllMenu = async () => {
  const result = await pool.query('SELECT * FROM menu');
  return result.rows;
};

// tambah menu baru
const addMenu = async (name, price, category) => {
  const result = await pool.query(
    'INSERT INTO menu (name, price, category) VALUES ($1, $2, $3) RETURNING *',
    [name, price, category]
  );
  return result.rows[0];
};

module.exports = {
  getAllMenu,
  addMenu,
};
