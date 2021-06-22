import React from "react";
import GlobalStyle from "./globalStyle.styles";
import NavigationPL from "./menu.component";
import NavigationForeign from "./menu_ENG.component";
import FooterComponent from "./footer.component";
import FooterComponentENG from "./footer_ENG.component";
import { useLocation } from "react-router-dom";
import LanguageProvider from "./../providers/languageProvider";

const LayoutComponent = (props) => {
    const location = useLocation();

    const renderNavigation = (pathname) => {
        switch (pathname) {
            case "/pl":
            case "/pl/": {
                return (
                    <>
                        <NavigationPL />
                        {props.children}
                        <FooterComponent />
                    </>
                );
            }
            default: {
                return (
                    <>
                        <NavigationForeign />
                        {props.children}
                        <FooterComponentENG />
                    </>
                );
            }
        }
    };

    return (
        <LanguageProvider>
            <GlobalStyle />
            {renderNavigation(location.pathname)}
        </LanguageProvider>
    );
};

export default LayoutComponent;
