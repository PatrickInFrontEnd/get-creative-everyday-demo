import React from "react";
import GlobalStyle from "./globalStyle.styles";
import Navigation from "./menu.component";

const LayoutComponent = (props) => (
    <>
        <GlobalStyle />
        <Navigation />
        {props.children}
    </>
);

export default LayoutComponent;
