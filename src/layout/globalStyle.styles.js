import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    font-size:10px;
}

body{
    background-color: #202020;
    color: ${({ theme }) => theme.colors.white || "#ffffff"};
}
`;

export default GlobalStyle;
