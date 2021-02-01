const Albuns = require('../models/Albuns');
const Artist = require('../models/Artists');
module.exports={

    async store(req, res){
        const {id_artist} =req.params;
        const {name, artwork, artwork_cover}=req.body;
        const artist = await Artist.create({name, artwork, artwork_cover})
        return res.json(artist);
    },
    async index(req, res){
        const albuns = await Albuns.findAll({
            include:[{
                association: 'artist',
                attributes:['id','name']
            },
        {
            association: 'musics',
                attributes:['id','title','music_album']
        }]
        });

        const album =albuns.map((value, index, array) => {
            let i=0;
            return{
                id:value.id,
                name:value.name,
                artwork:value.artwork,
                date:value.date,
                artist:{
                    id:value.artist.id,
                    name:value.artist.name,
                },
                musics:value.musics.map((value, index, array) => {
                    i++;
                    return {
                        id:value.id,
                        title:value.title,
                        music_album:value.music_album
                    }
                }),
                numb_musics:i
            }
        })

/*         "id": 1,
"name": "Spirit Free",
"artwork": "https://upload.wikimedia.org/wikipedia/pt/6/6c/Free_Spirit_de_Khalid.png",
"date": "2021-01-30T23:24:50.000Z",
"createdAt": "2021-01-29T23:58:25.000Z",
"updatedAt": "2021-01-29T23:58:25.000Z",
"artist_id": 1,
"artist": {
"name": "Khalid"
},
"musics": [
{
"id": 1,
"title": "Satyrday Nights"
},
{
"id": 5,
"title": "Intro"
},
{
"id": 6,
"title": "Bad Luck"
}
] */


        return res.json(album);
    },
    async albumArstist(req, res){
        const {id_artist} =req.params;
        const artist = await Artist.findByPk(id_artist,{
            include:{association: 'albuns'}
        });

        return res.json(artist);
    }
}