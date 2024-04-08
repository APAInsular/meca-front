import React, { useState } from "react";
import Evento from "./Evento";

const EventosDestacados = () => {
    const [data, setData] = useState(null);

    const eventos = [
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
            <div>
                <h3 className="text-uppercase">
                    Eventos Destacados
                </h3>
            </div>
            <div>
                {eventos.map((evento, index) => {
                    return (
                        <Evento key={index} evento={evento} />
                    )
                })}
            </div>
        </div>
    );
}

export default EventosDestacados;