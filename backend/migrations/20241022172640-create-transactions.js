'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
    */
    await queryInterface.createTable('transaction', { 
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		user_id: {
			type: Sequelize.INTEGER,
			allowNull: false,
	
		},
		type: {
			type: Sequelize.ENUM('INCOME', 'EXPENSE', 'TRANSFER'),
			allowNull: false,
		},
		amount: {
			type: Sequelize.FLOAT,
			allowNull: false,
		},
		date: {
			type: Sequelize.DATEONLY,
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING,
		},
		category: {
			type: Sequelize.STRING,
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW,
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: Sequelize.NOW,
		},
	});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
    */
    await queryInterface.dropTable('transaction');
  }
};
