import React from "react";

const Obra = ({ obra }) => {
    return (
        <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="col-12 d-flex justify-content-center">
                <img src={obra.imagen} alt="ImagenObra" style={{ width: "200px", height: "200px" }} />
            </div>
            <div className="col-12">
                <strong>{obra.nombre}</strong>
            </div>
            <div className="col-12 d-flex justify-content-between">
                <span className="col-lg-12 col-xs-6 col-sm-6">{obra.autor.nombre}</span>
                <span className="col-lg-12 col-xs-6 col-sm-6">{obra.fecha}</span>
            </div>
        </div>
    )
}

export default Obra;