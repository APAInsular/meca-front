import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import { useAxiosBaseUrl } from "../../context/AxiosBaseUrl";

import Obra from "./Obra";
import BigSpinner from "../BigSpinner";

const ObrasDestacadas = () => {
    const baseUrl = useAxiosBaseUrl()
    const [data, setData] = useState(null);

    const getMonument = async () => {
        try {
            const response = await axios.get(`${baseUrl}/top-rated-monuments`);
            if (response.data) setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getMonument();
    }, []);

    if (!data) {
        return <BigSpinner />
    } else {
        return (
            <div className="p-3 align-items-center text-center">
                <h3 className="text-uppercase">
                    ESCULTURAS DESTACADAS
                </h3>

                <div className="d-flex justify-content-center">
                    <div className="row" style={{ margin: "0 auto" }}>
                        {
                            data.map((obra, index) => (
                                <Obra key={index} obra={obra} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ObrasDestacadas;