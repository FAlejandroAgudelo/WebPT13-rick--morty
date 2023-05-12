import styles from "./SearchBar.module.css"

export default function SearchBar(props) {
   return (
      
      <div className={styles.contenido}>
         <div className={styles.buscar}>
            <input 
               type='search'
               name="search"
               id="search" 
            />
            <button onClick={props.onSearch}>Agregar</button>
         </div>
      </div>
      
   );
}
