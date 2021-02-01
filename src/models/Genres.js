const {Model, DataTypes} =require('sequelize');

class Genres extends Model{

    static init(sequelize){
        super.init({
            name:DataTypes.STRING
        },{
            sequelize,
        })
    }
    static associate(models){
        this.belongsToMany(models.Musics, {foreignKey:'genre_id', through:'musics_genres', as:'musics'});
    }
}
module.exports = Genres;