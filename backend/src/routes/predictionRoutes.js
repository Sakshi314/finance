const express = require('express');
const router = express.Router();
const predictionController = require('../controllers/predictionController');
const authMiddleware = require('../middleware/auth'); // For protected routes

// Create a new prediction (Protected route)
router.post('/', authMiddleware, predictionController.createPrediction);

// Get all predictions for a user (Protected route)
router.get('/', authMiddleware, predictionController.getPredictions);

module.exports = router;