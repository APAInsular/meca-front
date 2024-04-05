import React from "react";

const Obra = ({ obra }) => {
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
                <img src={obra.imagen} alt="ImagenObra" style={{ width: "230px", height: "230px" }} />
            </div>
            <div className="col-12">
                <strong>{obra.nombre}</strong>
            </div>
            <div className="col-12 d-flex justify-content-between">
                <span>{obra.autor.nombre}</span>
                <span>{obra.fecha}</span>
            </div>
        </div>
    )
}

export default Obra;