const sequelize = require('../../config/dbConfig');
const { DataTypes } = require('sequelize');
const user = require('../../models/user');
const budget = require('../../models/budget');
const transaction = require('../../models/transaction');
const prediction = require('../../models/prediction');
// const { Transaction } = require('sequelize');

user.init(sequelize , DataTypes);
budget.init(sequelize , DataTypes);
transaction.init(sequelize , DataTypes);
prediction.init(sequelize , DataTypes);

user.hasMany(transaction)
transaction.belongsTo(user)

module.exports = {
    sequelize,
    user,
    budget,
    transaction,
    prediction,
};