const transactionService = require('../services/transactionService');

class TransactionController {
  async createTransaction(req, res) {
    try {
      const transaction = await transactionService.addTransaction(req.body, req.user.id);
      return res.status(201).json(transaction);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getAllTransactions(req, res) {
    try {
      const transactions = await transactionService.getTransactions(req.user.id);
      return res.status(200).json(transactions);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async updateTransaction(req, res) {
    try {
      const transaction = await transactionService.updateTransaction(req.params.id, req.body);
      return res.status(200).json(transaction);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new TransactionController();