import Card from './Card';

export default function Cards(props) {
   const {characters} = props;
   return (
      <div>
         {characters.map(character => (
            <Card
               key = {character.id}
               name = {character.name}
               specie = {character.species}
               gender = {character.gender}
               image = {character.image}
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