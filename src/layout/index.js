import React from "react";
import GlobalStyle from "./globalStyle.styles";
import Navigation from "./menu.component";
import FooterComponent from "./footer.component";

const LayoutComponent = (props) => (
    <>
        <GlobalStyle />
        <Navigation />
        {props.children}
        <FooterComponent />
    </>
);

export default LayoutComponent;
