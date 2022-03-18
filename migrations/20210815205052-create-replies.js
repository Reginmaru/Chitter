'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Reply: {
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
      PeepId:{
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:"Peeps"
          },
          key: "id"
        },
        onDelete:"CASCADE", 
        allowNull: false

      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Replies');
  }
};