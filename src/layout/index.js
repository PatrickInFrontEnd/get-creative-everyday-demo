import React from "react";
import GlobalStyle from "./globalStyle.styles";
import Navigation from "./menu.component";
import NavigationENG, {
    NavigationComponentSPANISH,
} from "./menu_ENG.component";
import FooterComponent from "./footer.component";
import FooterComponentENG from "./footer_ENG.component";
import { useLocation } from "react-router-dom";
import SwitcherComponent from "../components/LanguageSwitcher/Switcher.component";

const LayoutComponent = (props) => {
    const location = useLocation();

    const renderNavigation = (pathname) => {
        switch (pathname) {
            case "/pl":
            case "/pl/": {
                return (
                    <>
                        <Navigation />
                        {props.children}
                        <FooterComponent />
                    </>
                );
            }
            case "/esp":
            case "/esp/": {
                return (
                    <>
                        <NavigationComponentSPANISH />
                        {props.children}
                        <FooterComponentENG />
                    </>
                );
            }
            default: {
                return (
                    <>
                        <NavigationENG />
                        {props.children}
                        <FooterComponentENG />
                    </>
                );
            }
        }
    };

    return (
        <>
            <GlobalStyle />
            {renderNavigation(location.pathname)}
        </>
    );
};

export default LayoutComponent;
