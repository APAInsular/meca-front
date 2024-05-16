import React, { useEffect, useState } from "react";

import axios from "axios";
import { useAxiosBaseUrl } from "../../context/AxiosBaseUrl";

import Map from "../Map";

//key = pk.91f44c3ffc2f0d2aa22e44dc2641e1a1

const Ruta = () => {
    const baseUrl = useAxiosBaseUrl();
    const [route, setRoute] = useState(null);
    const [stops, setStops] = useState([]);
    const [map, setMap] = useState(null);

    const getStops = async () => {
        try {
            const response = await axios.get(`${baseUrl}/routes/1/stops`);
            setStops(response.data);
            console.log("Data Stops: " + response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getRoute = async () => {
        try {
            const response = await axios.get(`${baseUrl}/routes/1/all-info`);
            setRoute(response.data);
            console.log("Data Route: " + response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // useEffect(() => {
    //     getStops();
    // }, [])

    // useEffect(() => {
    //     getRoute();
    // }, [])

    return (
        <div style={{ marginBottom: "300px" }}>
            <Map />
        </div>
    );
}

export default Ruta;