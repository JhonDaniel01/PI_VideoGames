const { Router } = require('express');
const {getVideogamesHandler,getVideogamesIdHandler,postVideogamesHandler}= require("../handlers/videogamesHandlers")

const videogamesRouter = Router();


videogamesRouter.get("/:idVideogame",getVideogamesIdHandler)

videogamesRouter.get("/", getVideogamesHandler)

videogamesRouter.post("/",postVideogamesHandler)

module.exports = videogamesRouter;