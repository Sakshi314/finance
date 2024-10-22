// src/graphql/resolvers/predictionResolver.js
const { Prediction } = require('../../../models/prediction');

const predictionResolver = {
  Query: {
    getPrediction: async (_, { id }) => {
      return await Prediction.findByPk(id);
    },
    getAllPredictions: async () => {
      return await Prediction.findAll();
    },
  },
  Mutation: {
    createPrediction: async (_, { category, predictedExpense, month }) => {
      return await Prediction.create({ category, predictedExpense, month });
    },
    updatePrediction: async (_, { id, category, predictedExpense, month }) => {
      const prediction = await Prediction.findByPk(id);
      if (!prediction) return null;
      return await prediction.update({ category, predictedExpense, month });
    },
    deletePrediction: async (_, { id }) => {
      const prediction = await Prediction.findByPk(id);
      if (!prediction) return false;
      await prediction.destroy();
      return true;
    },
  },
};

module.exports = predictionResolver;