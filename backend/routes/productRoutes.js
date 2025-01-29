// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authenticateToken = require('../middleware/authMiddleware')

// Define a route to get all products
router.get('/products', authenticateToken, productController.getProducts);
router.get('/products/:id', authenticateToken, productController.getProductById);

module.exports = router;
