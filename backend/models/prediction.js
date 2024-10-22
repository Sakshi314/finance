// src/models/prediction.js
const { DataTypes, Model } = require('sequelize');

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
    sequelize: require('../../config/dbConfig'),
    modelName: 'prediction',
    timestamps: true,
});

module.exports = Prediction;