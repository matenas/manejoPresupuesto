import React, {Fragment} from 'react';

const ControlPresupuesto = ({presupuesto,restante}) => (
    <Fragment>
        <div className="alert alert-primary">
            <p>Presupuesto: {presupuesto}</p>
        </div>
        <div className="alert">
            <p>Restante: {restante}</p>
        </div>
    </Fragment>
);

export default ControlPresupuesto;