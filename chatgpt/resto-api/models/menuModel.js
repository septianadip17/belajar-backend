const pool = require('../db');

const getAllMenu = async () => {
  const result = await pool.query('SELECT * FROM menu');
  return result.rows;
};

module.exports = {
  getAllMenu,
};
