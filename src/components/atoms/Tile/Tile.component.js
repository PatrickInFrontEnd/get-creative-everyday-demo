import React from "react";
import styled from "styled-components";
import { flexCenter, size_100x100 } from "./../../mixins";

const Container = styled.div`
    position: relative;
    width: 400px;
    height: 200px;
    margin: 0 15px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};

    h4 {
        font-family: ${({ theme }) => theme.ff.HolaB};
        line-height: 100%;
        font-size: ${({ theme }) => theme.fz.hola.mini};
        font-weight: ${({ theme }) => theme.fw.regular};
        color: ${({ theme }) => theme.colors.black};
    }

    p {
        width: 100%;
        font-size: ${({ theme }) => theme.fz.XXS};
        color: ${({ theme }) => theme.colors.black};
        font-weight: ${({ theme }) => theme.fw.medium};
    }

    @media screen and (max-width: 500px) {
        margin: 30px 0;
        height: auto;
        padding: 0;
        width: 100%;

        p {
            margin-top: 20px;
        }
    }
`;

export const TitleContainer = styled.div`
    ${flexCenter};
`;

export const TileIconContainer = styled.div`
    ${flexCenter};
    width: 40px;
    height: 40px;
    margin-right: 15px;

    svg {
        ${size_100x100};
        min-width: 40px;
        min-height: 40px;
        fill: ${({ theme }) => theme.colors.yellow};
    }

    @media screen and (max-width: 838px) {
        right: 50%;
    }
`;

const TileComponent = (props) => <Container>{props.children}</Container>;
export default TileComponent;
