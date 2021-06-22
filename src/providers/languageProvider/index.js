import React, { useState, createContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import resources from "./../../data/i18n/locales";

export const languageContext = createContext({
    language: "eng",
    languages: [],
    setLanguage: () => {},
});

const LanguageProvider = (props) => {
    const { i18n } = useTranslation();

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [languages, setLanguages] = useState(
        Object.keys(resources.resources)
    );

    const handleSetLanguage = (lang) => {
        if (languages.includes(lang)) {
            setCurrentLanguage(lang);
        } else {
            setCurrentLanguage("en");
        }
    };

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    return (
        <languageContext.Provider
            value={{
                language: currentLanguage,
                languages,
                setLanguage: handleSetLanguage,
            }}
        >
            {props.children}
        </languageContext.Provider>
    );
};
export default LanguageProvider;
