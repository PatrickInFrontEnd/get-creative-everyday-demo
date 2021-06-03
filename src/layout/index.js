import React from "react";
import GlobalStyle from "./globalStyle.styles";
import Navigation from "./menu.component";
import NavigationENG from "./menu_ENG.component";
import FooterComponent from "./footer.component";
import FooterComponentENG from "./footer_ENG.component";
import { useLocation } from "react-router-dom";
import SwitcherComponent from "../components/LanguageSwitcher/Switcher.component";

const LayoutComponent = (props) => {
    const location = useLocation();

    return (
        <>
            <GlobalStyle />
            <SwitcherComponent />
            {location.pathname === "/pl" || location.pathname === "/pl/" ? (
                <>
                    <Navigation />
                    {props.children}
                    <FooterComponent />
                </>
            ) : (
                <>
                    <NavigationENG />
                    {props.children}
                    <FooterComponentENG />
                </>
            )}
        </>
    );
};

export default LayoutComponent;
