import Card from '../Card/Card';
import styles from "../Cards/Cards.module.css"

export default function Cards(props) {
   const {characters} = props;
   return (
      <div className={styles.dataCard}>
         {characters.map(character => (
            <Card
               id = {character.id}
               key = {character.id}
               species = {character.species}
               gender = {character.gender}
               name = {character.name}
               status = {character.status}
               // origin = {character.origin.name}
               image = {character.image}
               onClose={() => props.onClose(character.id)}
            />
            ))}
      </div>
   );
}
// name: nombre.
// status: status.
// species: especie.
// gender: género.
// origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
// image: imagen.