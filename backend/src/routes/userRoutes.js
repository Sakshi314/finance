const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // For protected routes

// Register a new user
router.post('/register', userController.registerUser);

// Login user and get token
router.post('/login', userController.loginUser);

// Get user profile (Protected route)
router.get('/profile/:id', authMiddleware, userController.getUserProfile);

module.exports = router;