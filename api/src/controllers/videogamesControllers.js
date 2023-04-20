const {Videogame}=require("../db")

const createVideogame=async(videogame)=>{
    const newVideogame= await Videogame.create(videogame);
    return newVideogame;
}

module.exports={createVideogame}