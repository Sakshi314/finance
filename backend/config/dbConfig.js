require('dotenv').config(); // Load environment variables from .env file
const { Sequelize } = require('sequelize');

// Create a new instance of Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,      // Database name
    process.env.DB_USER,     // Database user
    process.env.DB_PASSWORD,  // Database password
    {
        host: process.env.DB_HOST, // Host (usually localhost)
        port: process.env.DB_PORT || 5432, // Port (default to 5432 for PostgreSQL)
        dialect: 'postgres', // Specify the database dialect
        logging: false, // Set to true to enable SQL query logging in the console
        // Additional options can be included here as needed
    }
);

module.exports = sequelize; // Export the sequelize instance