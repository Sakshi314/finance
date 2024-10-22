'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
	*/
		await queryInterface.createTable('budget', { 
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			user_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			category: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			limit: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			period: {
				type: Sequelize.ENUM('MONTHLY', 'YEARLY'),
				defaultValue: 'MONTHLY',
				allowNull: false,
			},
			totalSpent: {
				type: Sequelize.FLOAT,
				defaultValue: 0,
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
		await queryInterface.dropTable('budget');
	}
};
