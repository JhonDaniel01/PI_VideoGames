const {createVideogame,videogameId, findAllGames}=require("../controllers/videogamesControllers")

const getVideogamesIdHandler= async(req,res)=>{
    // Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
    // El videojuego es recibido por parámetro (ID).
    // Tiene que incluir los datos del género del videojuego al que está asociado.
    // Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.
    
    const {idVideogame}=req.params;
    const source=isNaN(idVideogame)?"bdd":"api";
    try {
        const detailVideogame= await videogameId(idVideogame,source);
        res.status(200).json(detailVideogame);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
    
}


const getVideogamesHandler = async(req,res)=>{
    try {
        const {page,filter,order,name,genre}=req.query;
        const videogames=await findAllGames(page,filter,order,name,genre);
        res.status(200).json(videogames);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
const postVideogamesHandler= async (req,res)=>{
    // POST | /videogames
    // Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
    // Toda la información debe ser recibida por body.
    // Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
    
    try {
        const {name,description,platforms,background_image,released, rating,genres}=req.body;
        const newVideogame= await createVideogame(name,description,platforms,background_image,released, rating,genres);
        res.status(201).json(newVideogame);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports={
    getVideogamesHandler,
    getVideogamesIdHandler,
    postVideogamesHandler
}