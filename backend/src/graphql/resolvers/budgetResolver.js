// src/graphql/resolvers/budgetResolver.js
const { Budget } = require('../../../models/budget');

const budgetResolver = {
  Query: {
    getBudget: async (_, { id }) => {
      return await Budget.findByPk(id);
    },
    getAllBudgets: async () => {
      return await Budget.findAll();
    },
  },
  Mutation: {
    createBudget: async (_, { category, limit, period }) => {
      return await Budget.create({ category, limit, period });
    },
    updateBudget: async (_, { id, category, limit, period }) => {
      const budget = await Budget.findByPk(id);
      if (!budget) return null;
      return await budget.update({ category, limit, period });
    },
    deleteBudget: async (_, { id }) => {
      const budget = await Budget.findByPk(id);
      if (!budget) return false;
      await budget.destroy();
      return true;
    },
  },
};

module.exports = budgetResolver;