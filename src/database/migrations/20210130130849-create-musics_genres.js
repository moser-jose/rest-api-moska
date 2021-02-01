'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('musics_genres', { 
      id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      music_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'musics', key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      genre_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'genres', key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    
     return queryInterface.dropTable('musics_genres');
  }
};
