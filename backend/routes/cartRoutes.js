const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authenticateToken = require('../middleware/authMiddleware')
router.get('/cart', authenticateToken, cartController.getCart);

module.exports = router;