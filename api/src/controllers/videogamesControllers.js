const {Videogame}=require("../db")

const createVideogame=async(name,description,platforms,background_image,released, rating,genres)=>{
    const newVideogame= await Videogame.create({name,description,platforms,background_image,released, rating});
    newVideogame.addGenres(genres)
    return newVideogame;
}

module.exports={createVideogame}