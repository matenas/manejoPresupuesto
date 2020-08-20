import React, {Fragment, useState} from 'react';
import Error from './Error';


const Pregunta = ({setPresupuesto, setRestante, setMostrarPregunta}) => {
    
    //definir el state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //funcion que lee el presupuesto 
    const handlePresupuesto = (e) => {
        
        setCantidad(parseInt(e.target.value, 10));
    }

    //submit para definir presupuesto
    const addPresupuesto = (e) => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        //que hacer despues de validar
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);
    }
    
    return (
        <Fragment>
            <h2>¿Cual es tu presupuesto?</h2>
            {error? <Error mensaje="El presupuesto es incorrecto"></Error>   : null}
            <form
                onSubmit={addPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Presupuesto"
                    onChange={handlePresupuesto}
                />
                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    )
};

export default Pregunta;