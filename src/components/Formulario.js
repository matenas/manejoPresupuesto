import React, {useState} from 'react';



function Formulario() {
    
    
    return (
        <form
        
        >
            <h2>Agrega tus gastos</h2>
            <div className="campo">
                <label htmlFor="">Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. transporte"
                />
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 10.000"
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