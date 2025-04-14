const express = require('express');
const { handleGetMenu } = require('../controllers/menuController');

const router = express.Router();

router.get('/', handleGetMenu);

module.exports = router;
