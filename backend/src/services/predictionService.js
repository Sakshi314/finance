const { Prediction } = require('../../models');

class PredictionService {
  async createPrediction(predictionData, userId) {
    const prediction = await Prediction.create({ ...predictionData, userId });
    return prediction;
  }

  async getPredictions(userId) {
    return await Prediction.findAll({ where: { userId } });
  }
}

module.exports = new PredictionService();