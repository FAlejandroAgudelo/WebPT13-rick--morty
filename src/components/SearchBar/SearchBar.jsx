import { useState } from 'react';
import styles from "./SearchBar.module.css";


export default function searchBar(props) {

   const [characters, setCharacters] = useState("");
   const handleChange = e => {
      const {value} = e.target;
      setCharacters(value);
   
   };


   return (
      
      <div className={styles.contenido}>
         <div className={styles.buscar}>
            <input 
               type='search'
               name="search"
               id="search"
               onChange={handleChange}
            />
            <button onClick={() => props.onSearch(characters)}>Agregar</button>
         </div>
      </div>

   );
};
