import React from "react";
import GlobalStyle from "./globalStyle.styles";

const LayoutComponent = (props) => (
    <>
        <GlobalStyle />
        <h2>It's layout here ;&gt;</h2>
        {props.children}
    </>
);

export default LayoutComponent;
