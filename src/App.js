import React from 'react';
import Pregunta from './components/Pregunta';
import { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListaGastos from './components/ListaGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //definir el state 
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);


  //cuando agregamos un nuevo gasto
  const agregarNuevoGasto = (gasto) => {
    setGastos([
      ...gastos,
      gasto
    ])
  }

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
            <Formulario
              agregarNuevoGasto= {agregarNuevoGasto}
            ></Formulario>
          </div>
          <div className="one-half column">
            <ListaGastos
              gastos={gastos}
            ></ListaGastos>
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
            ></ControlPresupuesto>
          </div>
        </div>
        ) 
        }
      </div>
    </div>
  );
}

export default App;
