import React, { useContext, useLayoutEffect, useCallback } from "react";
import { languageContext } from "./../../providers/languageProvider";
import { useParams } from "react-router-dom";

const LanguageSwitcher = (props) => {
    const { language } = useParams();
    const { setLanguage } = useContext(languageContext);

    const changeLanguage = useCallback(() => {
        if (language) setLanguage(language);
    }, [language, setLanguage]);

    useLayoutEffect(() => {
        changeLanguage();
        return () => setLanguage("en");
    }, [language, setLanguage, changeLanguage]);

    return <React.Fragment />;
};
export default LanguageSwitcher;
