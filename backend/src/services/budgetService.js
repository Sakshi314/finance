const { Budget } = require('../models');

class BudgetService {
  async createBudget(budgetData, userId) {
    const budget = await Budget.create({ ...budgetData, userId });
    return budget;
  }

  async getBudgets(userId) {
    return await Budget.findAll({ where: { userId } });
  }

  async updateBudget(id, data) {
    const budget = await Budget.findByPk(id);
    if (!budget) {
      throw new Error('Budget not found');
    }
    return await budget.update(data);
  }
}

module.exports = new BudgetService();