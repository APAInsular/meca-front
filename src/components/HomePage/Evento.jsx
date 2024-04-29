import React from "react";

const Evento = ({ evento }) => {
    return (
        <div className="row mb-2 text-white" style={{ backgroundColor: "#263C5C", borderRadius: "20px" }}>
            <div className="col-6 d-flex align-items-center">
                <div>
                    <strong>{evento.titulo}</strong>
                </div>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
                <div>
                    <div className="mt-1">{evento.fecha}</div>
                    <div className="mb-1">{evento.num_inscritos + "/" + evento.cupo}</div>
                </div>
            </div>
        </div>
    );
}

export default Evento;