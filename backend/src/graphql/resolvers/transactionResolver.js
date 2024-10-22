// src/graphql/resolvers/transactionResolver.js
const { Transaction } = require('../../../models/transaction');

const transactionResolver = {
  Query: {
    getTransaction: async (_, { id }) => {
      return await Transaction.findByPk(id);
    },
    getAllTransactions: async () => {
      return await Transaction.findAll();
    },
  },
  Mutation: {
    createTransaction: async (_, { type, amount, date, description, category }) => {
      return await Transaction.create({ type, amount, date, description, category });
    },
    updateTransaction: async (_, { id, type, amount, date, description, category }) => {
      const transaction = await Transaction.findByPk(id);
      if (!transaction) return null;
      return await transaction.update({ type, amount, date, description, category });
    },
    deleteTransaction: async (_, { id }) => {
      const transaction = await Transaction.findByPk(id);
      if (!transaction) return false;
      await transaction.destroy();
      return true;
    },
  },
};

module.exports = transactionResolver;