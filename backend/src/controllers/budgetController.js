const budgetService = require('../services/budgetService');

class BudgetController {
  async createBudget(req, res) {
    try {
      const budget = await budgetService.createBudget(req.body, req.user.id);
      return res.status(201).json(budget);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getBudgets(req, res) {
    try {
      const budgets = await budgetService.getBudgets(req.user.id);
      return res.status(200).json(budgets);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }

  async updateBudget(req, res) {
    try {
      const budget = await budgetService.updateBudget(req.params.id, req.body);
      return res.status(200).json(budget);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new BudgetController();