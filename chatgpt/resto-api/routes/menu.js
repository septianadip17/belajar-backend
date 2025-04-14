const express = require('express');
const { handleGetMenu, handleAddMenu, handleUpdateMenu } = require('../controllers/menuController');

const router = express.Router();

router.get('/', handleGetMenu);
router.post('/', handleAddMenu);
router.put('/:id', handleUpdateMenu);


module.exports = router;
