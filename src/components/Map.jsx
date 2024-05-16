import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
    useEffect(() => {
        const loader = new Loader({
            apiKey: "AIzaSyChWIvjRq9AfOZzYvWP7uK9cGs3bT5J5nM", // Replace with your actual API key
            version: "weekly",
        });

        loader.importLibrary("maps").then(({ Map }) => {
            new Map(document.getElementById("map"), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 15,
            });
        }).catch(e => {
            console.error("Error loading Google Maps library: ", e);
        });
    }, []);

    return (
        <div id="map" style={{ height: "300px", width: "300px" }}></div>
    );
}

export default Map;
