// src/models/transaction.js
const { DataTypes, Model } = require('sequelize');

class Transaction extends Model {}

Transaction.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    type: {
        type: DataTypes.ENUM('INCOME', 'EXPENSE', 'TRANSFER'),
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    category: {
        type: DataTypes.STRING,
    },
    }, {
    sequelize: require('../../config/dbConfig'),
    modelName: 'transaction',
    timestamps: true,
});

module.exports = Transaction;