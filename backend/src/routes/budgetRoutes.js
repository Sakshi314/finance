const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const authMiddleware = require('../middleware/auth'); // For protected routes

// Create a new budget (Protected route)
router.post('/', authMiddleware, budgetController.createBudget);

// Get all budgets for a user (Protected route)
router.get('/', authMiddleware, budgetController.getBudgets);

// Update an existing budget (Protected route)
router.put('/:id', authMiddleware, budgetController.updateBudget);

module.exports = router;