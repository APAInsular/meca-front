import React, { useEffect, useState } from "react";

import axios from "axios";
import { useAxiosBaseUrl } from "../../context/AxiosBaseUrl";

import BigSpinner from "../BigSpinner";
import UserRanking from "./UserRanking";

const MobileRanking = () => {
    const baseUrl = useAxiosBaseUrl();

    const [data, setData] = useState([]);

    const getUsersByPointsCategory = async () => {
        try {
            const response = await axios.get(`${baseUrl}/users/points-category`);
            // Manejar la respuesta
            console.log(response.data);

            setData(response.data);

            // Aquí puedes actualizar el estado de tu aplicación o realizar otras operaciones con los datos recibidos
        } catch (error) {
            // Manejar errores
            console.error('Error al obtener los usuarios por categoría de puntos:', error);
        }
    };

    useEffect(() => {
        getUsersByPointsCategory();
    }, []);

    if (data.length == 0) {
        return (
            <BigSpinner />
        );
    } else {

        return (
            <div>
                <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>TOP</div>
                {data.top.map((user, index) => (
                    <UserRanking user={user} key={index} />
                ))}
                <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>PLATINO</div>
                {data.platino.map((user, index) => (
                    <UserRanking user={user} key={index} />
                ))}
                <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>ORO</div>
                {data.oro.map((user, index) => (
                    <UserRanking user={user} key={index} />
                ))}
                <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>PLATA</div>
                {data.plata.map((user, index) => (
                    <UserRanking user={user} key={index} />
                ))}
                <div className="col-12 text-center p-2 h1 text-white" style={{ backgroundColor: "#263c5c", margin: "0px" }}>BRONCE</div>
                {data.bronce.map((user, index) => (
                    <UserRanking user={user} key={index} />
                ))}
            </div>
        );
    }
}

export default MobileRanking
