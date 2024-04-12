import React from "react";

const Evento = ({ evento }) => {
    return (
        <div className="row mb-2 text-white" style={{ backgroundColor: "#263C5C" }}>
            <div className="col-6 d-flex align-items-center">
                <div>
                    <strong>{evento.titulo}</strong>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-end">
                <div>
                    <div>{evento.fecha}</div>
                    <div>{evento.num_inscritos + "/" + evento.cupo}</div>
                </div>
            </div>
        </div>
    );
}

export default Evento;