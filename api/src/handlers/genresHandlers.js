const {findAllGenres}=require("../controllers/genresControllers")

const getGenresHandler=async (req,res)=>{
    // GET | /genres
    // Obtiene un arreglo con todos los géneros existentes de la API.
    // En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los géneros que encuentres en la API.
    // Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.
    //res.send("Esta ruta trae todos los generos a la base de datos")
    try {
        const genres=await findAllGenres();
        res.status(200).json(genres);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
module.exports={getGenresHandler}