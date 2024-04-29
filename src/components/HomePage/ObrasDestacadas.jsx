import React from "react";
import { useState } from "react";

import Obra from "./Obra";

const ObrasDestacadas = () => {
    const [data, setData] = useState(null);

    const obras = [
        {
            nombre: "Escultura 1",
            fecha: "23-06-2007",
            autor: {
                nombre: "Luis Gordillo"
            },
            imagen: "/Image/Obra.jpg"
        },
        {
            nombre: "Escultura 2",
            fecha: "23-06-2007",
            autor: {
                nombre: "Luis Gordillo"
            },
            imagen: "/Image/Obra.jpg"
        },
        {
            nombre: "Escultura 3",
            fecha: "23-06-2007",
            autor: {
                nombre: "Luis Gordillo"
            },
            imagen: "/Image/Obra.jpg"
        },
        {
            nombre: "Escultura 4",
            fecha: "23-06-2007",
            autor: {
                nombre: "Luis Gordillo"
            },
            imagen: "/Image/Obra.jpg"
        }
    ]

    return (
        <div className="p-3 align-items-center text-center">
            <h3 className="text-uppercase">
                ESCULTURAS DESTACADAS
            </h3>

            <div className="d-flex justify-content-center">
                <div className="row" style={{ margin: "0 auto" }}>
                    {obras.map((obra, index) => (
                        <Obra key={index} obra={obra} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ObrasDestacadas;