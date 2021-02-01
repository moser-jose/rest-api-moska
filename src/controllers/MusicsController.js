
const Music = require('../models/Musics');
module.exports={
    async index(req, res){
        const musics = await Music.findAll({
            include:[{
                association: 'albuns',
                attributes:['id','name','artwork']
            },{
                association: 'artists',
                attributes:['id','name']
            },
            {
                association: 'genres',
                attributes:['id','name'],
                through:{
                    attributes:[]}
            }]
        
        });

        const music =musics.map((value, index, array) => {
            return {
                id:value.id,
                title:value.title,
                url:value.url,
                date:value.date,
                album:value.albuns.name,
                artwork:value.albuns.artwork,
                artist:value.artist_ft,
                artist_album:value.artists.name,
                music_album:value.music_album,
                genre:
                    value.genres.map((value, index, array) => {
                        return value.name
                    }),
                
            }
        })

        return res.status(200).send(music);
    }
}