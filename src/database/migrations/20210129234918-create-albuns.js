'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('albuns', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      artist_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'artists', key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
        artwork:{
          type: Sequelize.TEXT,
          allowNull:false
      },
      date:{
        type: Sequelize.DATE,
        allowNull:false
      }
      ,
      created_at:{
        type: Sequelize.DATE,
        allowNull:false
      }
      ,
      updated_at:{
        type: Sequelize.DATE,
        allowNull:false
      }
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('albuns');
  }
};
