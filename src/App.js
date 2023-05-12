import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>

         <div className='Buscar'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </div>

         <div className='logo'>
            <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt='logo' />
         </div>

         <Cards characters={characters} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
         
         <hr/>
      </div>
   );
}

export default App;
