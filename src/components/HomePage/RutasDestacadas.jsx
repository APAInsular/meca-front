import React from "react";

import Ruta from "./Ruta";

const RutasDestacadas = () => {

    const rutas = [
        {
            nombre: "Ruta 1",
            img: "/Map.png"
        },
        {
            nombre: "Ruta 2",
            img: "/Map.png"
        }
    ]

    return (
        <div className="p-3 align-items-center text-center">
            <h3 className="text-uppercase">
                Obras destacadas
            </h3>

            <div className="d-flex justify-content-center">
                <div className="row" style={{ margin: "0 auto" }}>
                    {rutas.map((ruta, index) => (
                        <Ruta key={index} ruta={ruta} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RutasDestacadas;