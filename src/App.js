import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';

function App() {

   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         
      if(!characters.find(char => char.id === data.id)) {
         
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } else{
         alert(`Ya exite el personaje con el ID ${id}`)
      }
      }).catch(() => window.alert(`No hay personajes con ese ID!`));
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id))) 
   }
   

   return (
      <div className='App'>

         <div className='Buscar'>
         <NavBar onSearch = {onSearch} />
         </div>

         <div className='logo'>
            <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt='logo' />
         </div>
         
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      
      </div>
   );
}

export default App;
