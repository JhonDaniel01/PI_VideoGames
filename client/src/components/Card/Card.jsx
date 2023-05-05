import style from "./Card.module.css"
const Card=(props)=>{
    return(
        <div className={style.container}>
            <h2>{props.name}</h2>
            <img src={props.background_image}/>
            <h2>{props.rating}</h2>
         </div>
    )
}
export default Card;