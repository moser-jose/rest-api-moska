const {Model, DataTypes} =require('sequelize');

class Musics extends Model{

    static init(sequelize){
        super.init({
            artist_ft:DataTypes.STRING,
            title:DataTypes.STRING,
            url:DataTypes.TEXT,
            date:DataTypes.DATE,
            music_album:DataTypes.INTEGER,
        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.Albuns, {foreignKey:'album_id', as:'albuns'});
        this.belongsTo(models.Artists, {foreignKey:'artist_id', as:'artists'});
        this.belongsToMany(models.Genres, {foreignKey:'music_id', through:'musics_genres', as:'genres'});
    }

}
module.exports = Musics;