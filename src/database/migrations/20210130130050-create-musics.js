'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.createTable('musics', { 
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
      album_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'albuns', key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      artist_ft:{
        type: Sequelize.STRING,
        allowNull:false
      },
      music_album:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      title:{
        type: Sequelize.STRING,
        allowNull:false
      },
      url:{
        type: Sequelize.TEXT,
        allowNull:false
      },
      date:{
        type: Sequelize.DATE,
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
    
     return queryInterface.dropTable('musics');
  }
};
