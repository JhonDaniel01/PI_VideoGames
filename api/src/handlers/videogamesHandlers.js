
const getVideogamesIdHandler= (req,res)=>{
    // Esta ruta obtiene el detalle de un videojuego específico. Es decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
    // El videojuego es recibido por parámetro (ID).
    // Tiene que incluir los datos del género del videojuego al que está asociado.
    // Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.
    const {idVideogame}=req.params;
    res.send(`Esta ruta trae los datos del juego con el id: ${idVideogame} recibido por parametro`)
}


const getVideogamesHandler = (req,res)=>{
    const {name}=req.query;
    if (name){
        //     GET | /videogames/name?="..."
        // Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
        // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
        // Si no existe el videojuego, debe mostrar un mensaje adecuado.
        // Debe buscar tanto los de la API como los de la base de datos.
        res.send(`Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra ${name}`)
    } else{
        //Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información.
        res.send("Esta ruta trae los todos los video juegos")
    }
}
const postVideogamesHandler= (req,res)=>{
    // POST | /videogames
    // Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados.
    // Toda la información debe ser recibida por body.
    // Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus géneros indicados (al menos uno).
    const {name,description,plataform,image,date, rating,genre}=req.body;
    res.send(`Esta ruta crea un video juego en la base de datos
       Name ${name}, description ${description},plataform ${plataform},image ${image},date ${date}, rating ${rating},genre ${genre}
    `)
}

module.exports={
    getVideogamesHandler,
    getVideogamesIdHandler,
    postVideogamesHandler
}