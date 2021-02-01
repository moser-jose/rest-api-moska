'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable('artists', {
        id:{
          type: Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        name:{
          type: Sequelize.STRING,
          allowNull:false
        },
          artwork:{
            type: Sequelize.TEXT,
            allowNull:false
        },
        artwork_cover:{
          type: Sequelize.TEXT,
          allowNull:false
        },
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
    return queryInterface.dropTable('artists');
  }
};
