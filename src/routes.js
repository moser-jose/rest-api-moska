const express =require('express');
const ArtistController = require('./controllers/ArtistController');
const AlbunsController = require('./controllers/AlbunsController');
const GenresController = require('./controllers/GenresController');
const MusicsController = require('./controllers/MusicsController');
const router =express.Router();

router.get('/artists', ArtistController.index);
router.get('/artist/:id_artist', ArtistController.artistById);
router.get('/artist/:name', ArtistController.artistByName);
router.get('/artist/:id_artist/albuns', AlbunsController.albumArstist);

//albuns

router.get('/albuns', AlbunsController.index);

//Genres
router.get('/genres', GenresController.index);

//Musics
router.get('/musics', MusicsController.index);

module.exports=router;