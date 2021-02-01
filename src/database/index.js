const Sequelize = require('sequelize');
const dbConfig = require('../config/database');


const Artists = require('../models/Artists');
const Albuns = require('../models/Albuns');
const Genres = require('../models/Genres');
const Musics = require('../models/Musics');

const connection = new Sequelize(dbConfig);

Artists.init(connection);
Albuns.init(connection);
Genres.init(connection);
Musics.init(connection);

Musics.associate(connection.models);
Genres.associate(connection.models);
Albuns.associate(connection.models);
Artists.associate(connection.models);
module.exports=connection;