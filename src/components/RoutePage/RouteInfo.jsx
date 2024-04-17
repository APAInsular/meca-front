import React from "react";

const RouteInfo = ({ ruta }) => {
    console.log(ruta)

    return (
        <>
            <h2 className="fs-1">Ruta</h2>
            <div className="d-flex justify-content-center">
                <img src={ruta.img} alt="" style={{ width: '60%', height: "60%" }} />
            </div>
            <div className="fs-5 mt-4">
                <p>{ruta.info}</p>
            </div>
        </>
    )
}

export default RouteInfo;