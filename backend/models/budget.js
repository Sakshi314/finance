// src/models/budget.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Budget extends Model {}

Budget.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    limit: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    period: {
        type: DataTypes.ENUM('MONTHLY', 'YEARLY'),
        defaultValue: 'MONTHLY',
        allowNull: false,
    },
    totalSpent: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
    },
    }, {
    sequelize,
    modelName: 'budget',
    timestamps: true,
});

module.exports = Budget;