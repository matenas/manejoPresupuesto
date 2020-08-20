import React from 'react';
import Pregunta from './components/Pregunta';
import { useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  //definir el state 
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        { mostrarPregunta?
        (
          <Pregunta
            setPresupuesto = {setPresupuesto}
            setRestante = {setRestante}
            setMostrarPregunta = {setMostrarPregunta}
          >          
          </Pregunta>
        )
        : 
        (
        <div className="row">
          <div className="one-half column">
            <Formulario></Formulario>
          </div>
          <div className="one-half column">
            
          </div>
        </div>
        ) 
        }
      </div>
    </div>
  );
}

export default App;
