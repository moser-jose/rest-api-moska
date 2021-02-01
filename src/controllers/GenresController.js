
const Genre = require('../models/Genres');
module.exports={
    async index(req, res){
        const genres = await Genre.findAll();
        return res.status(200).send(genres);
    }
}