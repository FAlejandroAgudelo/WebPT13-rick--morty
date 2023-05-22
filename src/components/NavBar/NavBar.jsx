import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom";


export default function NavBar(props) {
    return(
        
        <nav className={styles.navegacion}> 

        <Link to={"/home"}>
        <button>Home</button>
        </Link>

        <Link to={"/about"}>
        <button>About</button>
        </Link>


        <SearchBar onSearch={props.onSearch} />
        </nav>
        
    
    );
}