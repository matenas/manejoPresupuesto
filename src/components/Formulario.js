import React, {useState} from 'react';
import Error from './Error';




function Formulario() {
    
    const [ nombreGasto, setNombreGasto ] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    //cuando el usuario agrega un gasto
    const addGasto = (e) => {
        e.preventDefault();

        //validar
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto.trim() === '') {
            setError(true);
            return;
        } 
        setError(false);


        //construir el gasto



        //pasar el gasto al componente principal para listarlo



        //resetear el form
    }

    return (
        <form
            onSubmit={addGasto}
        >
            <h2>Agrega tus gastos</h2>
            {error? <Error mensaje="Ingresaste mal los datos solicitados"></Error>   : null}
            <div className="campo">
                <label htmlFor="">Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. transporte"
                    value={nombreGasto}
                    onChange={(e) => setNombreGasto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 10.000"
                    value={cantidadGasto}
                    onChange={(e) => setCantidadGasto(parseInt(e.target.value,10))}
                />
            </div>
            <input 
                type="submit" 
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
}

export default Formulario;