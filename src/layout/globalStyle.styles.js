import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

html{
    font-size:10px;

    @media screen and (max-width:560px){
        &{
            font-size: 8px;
        }
    }
}

body{
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black || "#ffffff"};
    font-family:${({ theme }) => theme.ff.Montserrat};
}


h1{
    font-size: ${({ theme }) => theme.fz.XXXL}
}
h2{
    font-size: ${({ theme }) => theme.fz.XXL}
}
h3{
    font-size: ${({ theme }) => theme.fz.XL}
}
h4{
    font-size: ${({ theme }) => theme.fz.L}
}
h5{
    font-size: ${({ theme }) => theme.fz.M}
}
h6{
    font-size: ${({ theme }) => theme.fz.S}
}

p{
    font-size: ${({ theme }) => theme.fz.S};
}

a{
    text-decoration:none;
    color:inherit;
}

section#glowna,
section#main{
    position:relative;
    overflow: hidden;
    min-height:calc(100vh - 80px);
}
`;

export default GlobalStyle;
