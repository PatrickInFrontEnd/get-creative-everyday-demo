import styled from "styled-components";
import { toUpperCase, changeTxtColor } from "../../mixins";

export const HeaderNormal = styled.div`
    & {
        font-family: ${({ theme }) => theme.ff.Montserrat};
        ${({ uppercase }) => toUpperCase(uppercase)}
        ${({ color }) => changeTxtColor(color)};

        h1 {
            font-size: ${({ theme }) => theme.fz.normal.big};
        }
        h2 {
            font-size: ${({ theme }) => theme.fz.normal.medium};
        }
        h3 {
            font-size: ${({ theme }) => theme.fz.normal.small};
        }
        p {
            font-size: ${({ theme }) => theme.fz.normal.medium};
        }

        h1,
        h2,
        h3,
        p {
            font-weight: ${({ theme }) => theme.fw.regular};
            text-align: center;

            &.bigger-line {
                line-height: 160%;
            }

            &.bold {
                font-weight: ${({ theme }) => theme.fw.extraBold};
            }
        }

        span {
            display: block;
            position: relative;

            &::before {
                content: "";
                width: 100%;
                height: 6px;
                background-color: ${({ theme }) => theme.colors.yellow};
                position: absolute;
                bottom: 4px;
                left: 0;
                z-index: -1;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        & {
            h1.header {
                font-size: ${({ theme }) => theme.fz.normal.medium};
            }
        }
    }

    @media screen and (max-width: 640px) {
        & {
            h1.header {
                font-size: ${({ theme }) => theme.fz.normal.small};
            }
        }
    }

    @media screen and (max-width: 420px) {
        & {
            h1.header {
                font-size: ${({ theme }) => theme.fz.S};
            }
        }
    }
`;

export const HeaderHola = styled.div`
    & {
        font-family: ${({ theme }) => theme.ff.HolaB};
        text-align: center;
        ${({ uppercase }) => toUpperCase(uppercase)}
        ${({ color }) => changeTxtColor(color)};
        margin: 15px 0;

        h1 {
            font-size: ${({ theme }) => theme.fz.hola.biggest};
        }
        h2 {
            font-size: ${({ theme }) => theme.fz.hola.big};
        }
        h3 {
            font-size: ${({ theme }) => theme.fz.hola.medium};
        }
        h4 {
            font-size: ${({ theme }) => theme.fz.hola.small};
        }
        h5 {
            font-size: ${({ theme }) => theme.fz.hola.mini};
        }

        h1,
        h2,
        h3,
        h4,
        h5 {
            font-weight: ${({ theme }) => theme.fw.regular};
        }
    }

    @media screen and (max-width: 1100px) {
        & {
            h1 {
                font-size: ${({ theme }) => theme.fz.hola.big};
            }
            h2 {
                font-size: ${({ theme }) => theme.fz.hola.medium};
            }
            h3 {
                font-size: ${({ theme }) => theme.fz.hola.small};
            }
            h4 {
                font-size: ${({ theme }) => theme.fz.hola.mini};
            }
            h5 {
                font-size: 3.8rem;
            }
        }
    }
`;
