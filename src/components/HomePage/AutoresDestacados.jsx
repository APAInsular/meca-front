import React, { useState, useEffect } from "react";
import Autor from "./Autor";
import BigSpinner from "../BigSpinner";

import axios from "axios";
import { useAxiosBaseUrl } from "../../context/AxiosBaseUrl";

const AutoresDestacados = () => {
    const baseUrl = useAxiosBaseUrl();
    const [data, setData] = useState(null);

    const getAuthor = async () => {
        try {
            const response = await axios.get(`${baseUrl}/top-rated-authors`);
            if (response.data) setData(response.data);
            console.log("Data Authors: " + response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getAuthor();
    }, []);

    if (!data) {
        return <BigSpinner />
    } else {
        return (
            <div className="p-3 text-center">
                <div className="align-items-center">
                    <h3 className="text-uppercase">
                        Autores Destacados
                    </h3>
                </div>
                <div>
                    {data.map((autor, index) => {
                        return (
                            <Autor key={index} autor={autor} />
                        )
                    })}
                </div>
            </div>
        );
    }

}

export default AutoresDestacados;