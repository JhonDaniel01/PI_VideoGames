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
    // let detailVideogame=[]
    // fetch(`${URL}?key=${API_KEY}`)
    // .then((response) => response.json())
    // .then((data) => {
    //     detailVideogame= [data.results];
    // });
    // const detailVideogame = await axios.get(`${URL}?key=${API_KEY}`);
    // console.log(detailVideogame.data);
    // return detailVideogame.data.results
    
    const detailVideogame= source==="api"
        ?(await axios.get(`${URL}/${idVideogame}?key=${API_KEY}`)).data //https://api.rawg.io/api/games/{id}
        :await Videogame.findByPk(idVideogame)
    return detailVideogame;
}

const findAllGames=async(serchGenres="Action")=>{
    const gamesBd= await findAllGamesDB()
    const gamesApi=await findAllGamesApi()
    const allVideogames=gamesBd.concat(gamesApi)
    //allVideogames.sort((y, x) => x.rating - y.rating); //Ordenar rating mayor a menor
    //allVideogames.sort((y, x) => y.rating - x.rating); //Ordenar rating menor a mayor
    //allVideogames.sort((x, y) => x.name.localeCompare(y.name)); //Ordenar nombre mayor a menor
    //allVideogames.sort((x, y) => y.name.localeCompare(x.name)); //Ordenar nombre menor a mayor
    const filterGenre=allVideogames.filter(videogame=>{
        for (let i = 0; i < videogame.genres.length; i++) {
            if(videogame.genres[i].name==serchGenres)return true   
        }
    })
    return filterGenre;
}
const findAllGamesApi=async()=>{
    const videogamesApi=[];
    const getApiInfo = await axios.get(`${URL}?key=${API_KEY}`);
    const getVideogames=getApiInfo.data.results;
    
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