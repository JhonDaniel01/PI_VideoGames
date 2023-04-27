const axios =require ("axios")
const {Videogame,Genre}=require("../db")
require('dotenv').config();
const {API_KEY} = process.env;
const URL="https://api.rawg.io/api/games"

const createVideogame=async(name,description,platforms,background_image,released, rating,genres)=>{
    const newVideogame= await Videogame.create({name,description,platforms,background_image,released, rating});
    newVideogame.addGenres(genres)
    return newVideogame;
}

const videogameId=async(idVideogame,source)=>{
    
    const detailVideogame= source==="api"
        ?(await axios.get(`${URL}/${idVideogame}?key=${API_KEY}`)).data 
        :await Videogame.findByPk(idVideogame)
    return detailVideogame;
}

const findAllGames=async(serchGenres="Action")=>{
    const gamesBd= await findAllGamesDB()
    const gamesApi=await findAllGamesApi()
    const allVideogames=await gamesBd.concat(gamesApi)
    allVideogames.sort((y, x) => x.rating - y.rating); //Ordenar rating mayor a menor
    //allVideogames.sort((y, x) => y.rating - x.rating); //Ordenar rating menor a mayor
    //allVideogames.sort((x, y) => x.name.localeCompare(y.name)); //Ordenar nombre mayor a menor
    //allVideogames.sort((x, y) => y.name.localeCompare(x.name)); //Ordenar nombre menor a mayor
    //console.log(gamesBd)

    //Busca genero juegos Api
    // const filterGenre= gamesApi.filter(videogame=>{
    //     for (let i = 0; i < videogame.genres.length; i++) {
    //         return (videogame.genres[i].name==serchGenres)
    //     }
    // })
    return allVideogames;
}
const findAllGamesApi=async()=>{
    const videogamesApi=[];
    let urlGames=`${URL}?key=${API_KEY}`;
    let getApiInfo = [];
    let getVideogames=[]
    
    for (let i = 0; i < 5; i++) {
        getApiInfo = await axios.get(urlGames);
        urlGames=getApiInfo.data.next;
        getVideogames=[...getVideogames,...getApiInfo.data.results];
    }
    
    getVideogames.map((videogame)=>{
       videogamesApi.push({
            id:videogame.id,
            name:videogame.name,
            released: videogame.released,
            rating: videogame.rating,
            background_image:videogame.background_image,
            genres:videogame.genres
        });
    })
    return videogamesApi;
}
const findAllGamesDB=async()=>{
    const videogames=await Videogame.findAll({
        
        include:{
            model:Genre,
            attributes: ["name"], 
            through:{
                attributes:[],
            },
        },});
    return videogames;
}
module.exports={createVideogame,videogameId,findAllGames}