const express = require('express');
const { handleGetMenu, handleAddMenu } = require('../controllers/menuController');

const router = express.Router();

router.get('/', handleGetMenu);
router.post('/', handleAddMenu);

module.exports = router;
