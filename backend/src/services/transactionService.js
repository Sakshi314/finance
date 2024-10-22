const { Transaction } = require('../../models');

class TransactionService {
  async addTransaction(transactionData, userId) {
    const transaction = await Transaction.create({ ...transactionData, userId });
    return transaction;
  }

  async getTransactions(userId) {
    return await Transaction.findAll({ where: { userId } });
  }

  async updateTransaction(id, data) {
    const transaction = await Transaction.findByPk(id);
    if (!transaction) {
      throw new Error('Transaction not found');
    }
    return await transaction.update(data);
  }
}

module.exports = new TransactionService();