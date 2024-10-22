// src/models/prediction.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Prediction extends Model {}

Prediction.init({
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
    predictedExpense: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    month: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    }, {
    sequelize,
    modelName: 'prediction',
    timestamps: true,
});

module.exports = Prediction;