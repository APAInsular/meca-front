import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useAxiosBaseUrl } from '../context/AxiosBaseUrl';

const UserPointsContext = createContext();

export const useUserPoints = () => useContext(UserPointsContext);

export const UserPointsProvider = ({ children }) => {
    const baseUrl = useAxiosBaseUrl();
    const userId = 1; // Reemplaza esto con la lógica adecuada para obtener el ID del usuario actual
    const [points, setPoints] = useState(0);
    const [showGIF, setShowGIF] = useState(false);

    const fetchUserPoints = async () => {
        try {
            const response = await axios.get(`${baseUrl}/user/${userId}/points`);
            setPoints(response.data.points);
        } catch (error) {
            console.error('Error fetching user points:', error);
        }
    };

    useEffect(() => {
        fetchUserPoints();
    }, []);

    const updateUserPoints = (newPoints) => {
        setShowGIF(true);
        setPoints(newPoints);
        setTimeout(() => {
            setShowGIF(false);
        }, 5000); // Ocultar el GIF después de 5 segundos
    };

    return (
        <UserPointsContext.Provider value={{ points, updateUserPoints, showGIF }}>
            {children}
        </UserPointsContext.Provider>
    );
};
