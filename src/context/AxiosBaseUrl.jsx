import React, { createContext, useContext } from 'react';

// 1. Define el contexto
const AxiosBaseUrlContext = createContext();

// 2. Proporciona un valor para el contexto en el nivel superior de tu aplicación
export const AxiosBaseUrlProvider = ({ baseUrl, children }) => {
    return (
        <AxiosBaseUrlContext.Provider value={baseUrl}>
            {children}
        </AxiosBaseUrlContext.Provider>
    );
};

// Hook personalizado para acceder al baseUrl
export const useAxiosBaseUrl = () => useContext(AxiosBaseUrlContext);
