// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware')

// Define a route to get all products
router.get('/users', authenticateToken, userController.getUsers);

module.exports = router;
