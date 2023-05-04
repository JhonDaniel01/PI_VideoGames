import { Link } from "react-router-dom";
import style from "./NavBar.module.css"
const NatBar=()=>{
    return(
        <div className={style.maincontainer}>
            <Link to="/Home">Home</Link>
            <Link to="/Form">Form</Link>
        </div>
    );
}

export default NatBar;