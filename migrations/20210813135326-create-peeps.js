'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Peeps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId:{
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:"Users"
          },
          key: "id"
        },
        onDelete:"CASCADE", 
        allowNull: false

      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Peeps');
  }
};