import styles from "./Card.module.css";

export default function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.botonContainer}>
         <button onClick={props.onClose}>X</button>
         </div>
         
         <div className={styles.dataContainer}>
         <h2>{props.name}</h2>
         <h3>{props.species}</h3>
         <h3>{props.gender}</h3>
         <h3>{props.status}</h3>
         {/* <h3>{props.origin.name}</h3> */}
         </div>
         
         {/* <h2>{props.status}</h2>
         <h2>{props.origin}</h2> */}
         <img className={styles.image} src={props.image} alt={props.name} />
      </div>
   );
}