const axios =require ("axios")
const {Videogame,Genre}=require("../db")
require('dotenv').config();
const {API_KEY} = process.env;
const URL="https://api.rawg.io/api/games"

const findNameGame=async(name)=>{
    const searchBd=await Videogame.findAll({
        
        include:{
            model:Genre,
            attributes: ["name"], 
            through:{
                attributes:[],
            },
        },});
    const searchApi= await axios.get(`${URL}?search=${name}&&key=${API_KEY}`) //https://api.rawg.io/api/games?search={game}
    
    //return searchApi.data;
    return searchBd;
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
const filterGenreGame=async(genre,gamesApi)=>{
    let filterGenre=[]
    const filterGenreApi= gamesApi.filter(videogame=>{
        for (let i = 0; i < videogame.genres.length; i++) {
            return (videogame.genres[i].name==genre)
        }
    })
    // const filterGenreBd=await Videogame.findAll({
        
    //     include:{
    //         model:Genre,
    //         attributes: ["name"], 
    //         through:{
    //             attributes:[],
    //         },
    //     },});
    filterGenre=filterGenreApi;
    return filterGenre;
}

module.exports={findNameGame,findAllGamesDB,findAllGamesApi,filterGenreGame}