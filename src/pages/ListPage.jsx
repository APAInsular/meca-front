import React, { useState, useEffect } from "react";
import Obra from "../components/HomePage/Obra";
import { Link } from "react-router-dom";

import axios from "axios";

const ListPage = () => {
    const [info, setInfo] = useState(null);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/monuments/all-info');
            setData(response.data);
            console.log(data);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    useEffect(() => {
        // Aquí mueve la lógica del switch
        const path = window.location.pathname.split("/")[2];
        switch (path) {
            case "autores":
                setInfo("autor");
                break;
            case "monumentos":
                setInfo("obra");
                break;
            case "estilos":
                setInfo("estilo");
                break;
            case "eventos":
                setInfo("evento");
                break;
            case "blog":
                setInfo("blog");
                break;
            case "logros":
                setInfo("logro");
                break;
            case "rutas":
                setInfo("ruta");
                break;
            default:
                setInfo(null);
                break;
        }
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="row mt-5">
                {data.map((obra, index) => (
                    <div className="col-xs-12 col-sm-6 col-lg-3">
                        <Link to={`/es/monuments/${obra.title}`}>
                            <Obra key={index} obra={obra} />
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListPage;