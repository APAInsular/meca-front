import React from "react";

const Obra = ({ obra }) => {
    return (
        <div className="col-xs-12 col-sm-6 col-lg-3">
            <div className="col-12 d-flex flex-column align-items-center">
                <img src={obra.imagen} alt="ImagenObra" style={{ width: "200px", height: "auto" }} />
                <div className="text-center mt-2">
                    <strong>{obra.nombre}</strong>
                </div>
                <div className="d-flex justify-content-center">
                    <span className="mr-4">{obra.autor.nombre}</span>
                    <span>{obra.fecha}</span>
                </div>
            </div>
        </div>
    )
}

export default Obra;
