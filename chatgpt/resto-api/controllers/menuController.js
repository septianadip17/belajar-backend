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

// PUT /menu/:id
const handleUpdateMenu = async (req, res) => {
  const { id } = req.params;
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ message: 'Semua field harus diisi!' });
  }
  try {
    const updatedMenu = await updateMenu(id, name, price, category);
    if (!updatedMenu) {
      return res.status(404).json({ message: 'Menu tidak ditemukan' });
    }
    res.status(200).json(updatedMenu);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal mengupdate menu' });
  }
};



module.exports = {
  handleGetMenu,
  handleAddMenu,
  handleUpdateMenu,
};
