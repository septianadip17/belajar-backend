const { getAllMenu, addMenu } = require('../models/menuModel');

// GET /menu
const handleGetMenu = async (req, res) => {
  try {
    const menus = await getAllMenu();
    res.status(200).json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// POST /menu
const handleAddMenu = async (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: 'Semua field harus diisi!' });
  }

  try {
    const newMenu = await addMenu(name, price, category);
    res.status(201).json(newMenu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal menambahkan menu' });
  }
};

module.exports = {
  handleGetMenu,
  handleAddMenu,
};
