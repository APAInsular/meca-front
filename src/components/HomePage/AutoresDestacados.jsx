import React, { useState } from "react";
import Autor from "./Autor";

const AutoresDestacados = () => {
    const [data, setData] = useState(null);

    const eventos = [
        {
            name: "Autor 1",
            nacimiento: "23-06-2007",
            num_obras: "5"
        },
        {
            name: "Autor 2",
            nacimiento: "23-06-2007",
            num_obras: "12"
        },
        {
            name: "Autor 3",
            nacimiento: "23-06-2007",
            num_obras: "23"
        },
        {
            name: "Autor 4",
            nacimiento: "23-06-2007",
            num_obras: "65"
        }
    ]

    return (
        <div className="p-3 text-center">
            <div className="align-items-center">
                <h3 className="text-uppercase">
                    Autores Destacados
                </h3>
            </div>
            <div className="">
                {eventos.map((evento, index) => {
                    return (
                        <Autor key={index} evento={evento} />
                    )
                })}
            </div>
        </div>
    );
}

export default AutoresDestacados;