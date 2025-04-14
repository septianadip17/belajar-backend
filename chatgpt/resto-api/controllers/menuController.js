const { getAllMenu } = require('../models/menuModel');

const handleGetMenu = async (req, res) => {
  try {
    const menus = await getAllMenu();
    res.status(200).json(menus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  handleGetMenu,
};
