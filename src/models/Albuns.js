const {Model, DataTypes} =require('sequelize');

class Albuns extends Model{

    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            artwork:DataTypes.TEXT,
            date:DataTypes.DATE,
        },{
            sequelize
        })
    }

    static associate(models){
        this.hasMany(models.Musics, {foreignKey:'album_id', as:'musics'});
        this.belongsTo(models.Artists, {foreignKey:'artist_id', as:'artist'});
    }

}
module.exports = Albuns;