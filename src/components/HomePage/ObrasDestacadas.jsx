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
        <div>
            <h3 className="text-uppercase">
                Obras destacadas
            </h3>

            <div className="d-flex justify-content-center">
                {
                    obras.map(obra => {
                        return (
                            <Obra obra={obra} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ObrasDestacadas;