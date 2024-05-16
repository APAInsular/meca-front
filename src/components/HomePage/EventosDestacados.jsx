import React, { useState } from "react";
import Evento from "./Evento";

const EventosDestacados = () => {
    const [data, setData] = useState(null);

    const eventos = [
        {
            titulo: "Evento 1",
            fecha: "23-06-2007",
            autor: {
                nombre: "Luis Gordillo"
            },
            cupo: "100",
            num_inscritos: "35"
        },
        {
            titulo: "Evento 2",
            fecha: "23-06-2007",
            autor: {
                nombre: "Luis Gordillo"
            },
            cupo: "100",
            num_inscritos: "35"
        },
        {
            titulo: "Evento 3",
            fecha: "23-06-2007",
            autor: {
                nombre: "Luis Gordillo"
            },
            cupo: "100",
            num_inscritos: "35"
        },
        {
            titulo: "Evento 4",
            fecha: "23-06-2007",
            autor: {
                nombre: "Luis Gordillo"
            },
            cupo: "100",
            num_inscritos: "35"
        }
    ]

    return (
        <div className="p-3 text-center">
            <div className="align-items-center">
                <h3 className="text-uppercase">
                    PRÓXIMOS EVENTOS
                </h3>
            </div>
            <div className="">
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