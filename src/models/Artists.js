const {Model, DataTypes} =require('sequelize');

class Artists extends Model{

    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            artwork:DataTypes.TEXT,
            artwork_cover:DataTypes.TEXT
        },{
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Albuns, {foreignKey:'artist_id', as:'albuns'});
        this.hasMany(models.Musics, {foreignKey:'artist_id', as:'musics'});
    }
}
module.exports = Artists;