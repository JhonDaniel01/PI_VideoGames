const {Genre}=require("../db")

const findAllGenres=async()=>{
    const genres=await Genre.findAll();
    return genres;
}

module.exports={findAllGenres}