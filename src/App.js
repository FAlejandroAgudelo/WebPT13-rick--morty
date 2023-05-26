import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const username = "correo@correo.com";
   const password = "123456";
   const navigate = useNavigate();

   function login(userData) {
      if (userData.password === password && userData.username === username) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

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

   const location = useLocation();
   // console.log(location);
   

   return (
      <div className='App'>

         {location.pathname !== "/" && 
         <div className='Buscar'>
         <NavBar onSearch = {onSearch} />
         </div>
         }
         

         <div className='logo'>
            <img className='logo1' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png" alt='logo' />
         </div>
         
         <Routes>
            <Route exact path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         </Routes>
      
      </div>
   );
}

export default App;
