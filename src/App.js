
import React from 'react';
import './App.css';
import {Perfil} from './perfil.js';
import { Titulo } from './Titulo';
import { Competencias } from './Competencias';
import { Contacto } from './Contacto';
import { Educacion } from './Educacion';
import { Experiencia } from './Experiencia';



function App() {
  return (
    <div className="App">
           
        <Titulo/>
        <Perfil/>
        <Competencias/>
        <Educacion/>
        <Experiencia/>
        <footer>
          <Contacto/>
        </footer>
      
      
    </div>
  );
}

export default App;
