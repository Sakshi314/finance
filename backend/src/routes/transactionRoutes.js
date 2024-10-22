const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authMiddleware = require('../middleware/auth'); // For protected routes

// Create a new transaction (Protected route)
router.post('/', authMiddleware, transactionController.createTransaction);

// Get all transactions for a user (Protected route)
router.get('/', authMiddleware, transactionController.getAllTransactions);

// Update a transaction (Protected route)
router.put('/:id', authMiddleware, transactionController.updateTransaction);

module.exports = router;