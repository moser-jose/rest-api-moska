
const Artist = require('../models/Artists');
const Musics = require('../models/Musics'); 
module.exports={

    /* async index(req, res){
        const artist = await Artist.findAll();
        return res.status(200).send(artist);
    }, */



    async index(req, res){
        const artists = await Artist.findAll({
            attributes:['id','name','artwork', 'artwork_cover'],
            include:[
        {
            association: 'albuns',
            include:{
                association: 'musics',
                attributes:['id','title','music_album']
            },
                attributes:['id','name', 'artwork', 'date']
        }]
        });

        const artist =artists.map((value, index, array) => {
           
            return{
                id:value.id,
                name:value.name,
                artwork:value.artwork,
                artwork_cover:value.artwork_cover,
                album: value.albuns.map((value, index, array) => {
                    let i=0;
                    return {
                        id:value.id,
                        name:value.name,
                        artwork:value.artwork,
                        date:value.date,
                        musics: value.musics.map((value, index, array) => {
                            i++;
                            return{
                                id:value.id,
                                title:value.title,
                                music_album:value.music_album
                            }
                        }),
                        numb_musics:i
                    }
                }),
                
            }
        })

        return res.json(artist);
    },



    async artistById(req, res, next){
        const {id_artist} =req.params;
        let i=0;
        const artists = await Artist.findByPk(id_artist,{
            attributes:['id','name','artwork', 'artwork_cover'],
            include:[
        {
            association: 'albuns',
            include:{
                association: 'musics',
                attributes:['id','title','music_album']
            },
                attributes:['id','name', 'artwork', 'date']
        }]
        });
            return res.status(200).send({
                id:artists.id,
                name:artists.name,
                artwork:artists.artwork,
                artwork_cover:artists.artwork_cover,
                album: artists.albuns.map((value, index, array) => {
                    i=0;
                    return {
                        id:value.id,
                        name:value.name,
                        artwork:value.artwork,
                        date:value.date,
                        musics: value.musics.map((value, index, array) => {
                            i++;
                            return{
                                id:value.id,
                                music_album:value.music_album,
                                title:value.title
                            }
                            
                        }),
                        numb_musics:i
                    }
                    
                }),
                
            })
        

    },
    async artistByName(req, res){
        const {name} =req.params;
        const artist = await Artist.findOne({where:{name}});
        return res.status(200).send(artist);;
    },
    async store(req, res){
        const {name, artwork, artwork_cover}=req.body;

        const artist = await Artist.create({name, artwork, artwork_cover})
        return res.status(200).send(artist);;
    }
}