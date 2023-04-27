const axios =require ("axios")
const {Videogame,Genre}=require("../db")
const {findAllGamesApi,findAllGamesDB,findNameGame,filterGenreGame}=require("./findGames")
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

const findAllGames=async(pag=1,filter,order,name,genre)=>{
    const gamesBd= await findAllGamesDB()
    const gamesApi=await findAllGamesApi()
    let allVideogames=await gamesBd.concat(gamesApi)
    if (genre) allVideogames=await filterGenreGame(genre,gamesApi)
    if (name) allVideogames=await findNameGame(name);
    switch (filter) {
        case "api":
            allVideogames=gamesApi;
            break;
        case "bd":
            allVideogames=gamesBd;
            break;
    }
    switch (order) {
       case "nameAsc":
            allVideogames.sort((x, y) => y.name.localeCompare(x.name)); //Ordenar nombre menor a mayor
            break;
        case "nameDes":
            allVideogames.sort((x, y) => x.name.localeCompare(y.name)); //Ordenar nombre mayor a menor
            break;
        case "ratingAsc":
            allVideogames.sort((y, x) => y.rating - x.rating); //Ordenar rating menor a mayor
            break;
        case "ratingDes":
            allVideogames.sort((y, x) => x.rating - y.rating); //Ordenar rating mayor a menor
            break;
    }
    //allVideogames.sort((y, x) => x.rating - y.rating); //Ordenar rating mayor a menor
    //allVideogames.sort((y, x) => y.rating - x.rating); //Ordenar rating menor a mayor
    //allVideogames.sort((x, y) => x.name.localeCompare(y.name)); //Ordenar nombre mayor a menor
    //allVideogames.sort((x, y) => y.name.localeCompare(x.name)); //Ordenar nombre menor a mayor
    //console.log(allVideogames)
        
    return allVideogames.slice((pag*15)-15,(pag*15));//0-14 15-29 30-44
}


module.exports={createVideogame,videogameId,findAllGames}