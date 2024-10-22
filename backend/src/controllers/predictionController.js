const predictionService = require('../services/predictionService');

class PredictionController {
  async createPrediction(req, res) {
    try {
      const prediction = await predictionService.createPrediction(req.body, req.user.id);
      return res.status(201).json(prediction);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getPredictions(req, res) {
    try {
      const predictions = await predictionService.getPredictions(req.user.id);
      return res.status(200).json(predictions);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new PredictionController();