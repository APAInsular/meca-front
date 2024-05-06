import React, { createContext, useContext, useEffect, useState } from 'react';

// Definir el contexto de traducción
export const TranslationContext = createContext();

// Hook personalizado para usar el contexto de traducción
export const useTranslation = () => {
    const translation = useContext(TranslationContext);

    if (!translation) {
        throw new Error('useTranslation debe ser usado dentro de TranslationProvider');
    }

    return translation;
};

// Función para obtener las traducciones según el idioma
const GetTranslations = async () => {
    const translations = {
        es: import("../translations/es/global.json"),
        en: import("../translations/en/global.json"),
        it: import("../translations/it/global.json"),
        fr: import("../translations/fr/global.json"),
        de: import("../translations/de/global.json"),
        jp: import("../translations/jp/global.json"),
        pl: import("../translations/pl/global.json"),
    };

    let idioma = window.location.pathname.split("/")[1];
    idioma = idioma || 'es';

    const translation = await translations[idioma] || await translations['en'];

    return translation;
}

// Proveedor del contexto de traducción
export const TranslationProvider = ({ children }) => {
    const [translation, setTranslation] = useState(null);

    useEffect(() => {
        const fetchTranslation = async () => {
            const translationData = await GetTranslations();
            setTranslation(translationData);
        };

        fetchTranslation();
    }, []);

    return (
        <TranslationContext.Provider value={translation}>
            {children}
        </TranslationContext.Provider>
    );
};
