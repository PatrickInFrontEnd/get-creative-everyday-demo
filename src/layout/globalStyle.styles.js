import { createGlobalStyle } from "styled-components";
import { SocialContainer } from "./../components/SocialMedia/SocialMedia.component";

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

html{
    font-size:10px;
}

body{
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white || "#ffffff"};
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

a{
    text-decoration:none;
}


        ${SocialContainer}{
            &:nth-of-type(2) {
                img{
                    padding:0 10px;
                    background:${({ theme }) => theme.colors.light_white};
                    background-blend-mode:multiply;
                    object-fit:contain;
                }

                a{
                    padding:7%;
                    left:-10px;
                }
            }
            
            &:nth-of-type(3) {

                a{
                    left:-10px;
                }
            }
            
        }
    


`;

export default GlobalStyle;
