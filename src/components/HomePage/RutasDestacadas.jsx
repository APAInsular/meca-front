import React from "react";

import Ruta from "./Ruta";

const RutasDestacadas = () => {
    return (
        <div className="p-3 align-items-center text-center">
            <h3 className="text-uppercase">
                Obras destacadas
            </h3>

            <div className="d-flex justify-content-center">
                <div className="row" style={{ margin: "0 auto" }}>
                    <Ruta />
                </div>
            </div>
        </div>
    )
}

export default RutasDestacadas;