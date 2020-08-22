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
  const [gasto, setGasto] = useState([]);
  const [crearGasto, setCrearGasto] = useState(false);


  //useEffect que actualiza el restante cuando se agrega un gasto
  useEffect(() => {
    if(crearGasto) {
      //agrega el nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ])

      //resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
    } 
    //resetear a false 
    setCrearGasto(false);
  }, [gasto,restante,crearGasto,gastos]);


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
                setGasto= {setGasto}
                setCrearGasto={setCrearGasto}
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
