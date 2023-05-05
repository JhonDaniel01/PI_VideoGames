import Card from "../Card/Card";
import style from "./Cards.module.css"
import { useSelector } from "react-redux";
const Cards=()=>{
  const videogames=useSelector(state=>state.videogames)
    return(
        <div className={style.container}>
           {videogames.map(videogame=>{
            return <Card
                id={videogame.id}
                name={videogame.name}
                background_image={videogame.background_image}
                rating={videogame.rating}/>
           })}
        </div>
    )
}

export default Cards;