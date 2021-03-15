import React from "react";
import styled from "styled-components";
import { flexCenter, size_100x100 } from "./../../mixins";

const Container = styled.div`
    position: relative;
    width: 330px;
    height: 200px;
    margin: 30px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.light_blue};
    color: ${({ theme }) => theme.colors.white};

    h4 {
        font-size: ${({ theme }) => theme.fz.M};
        color: ${({ theme }) => theme.colors.yellow};
    }

    p {
        width: 100%;
        font-size: ${({ theme }) => theme.fz.XXXS};
        font-weight: ${({ theme }) => theme.fw.medium};
    }

    @media screen and (max-width: 1350px) {
        width: 300px;
        height: 200px;
    }
    @media screen and (max-width: 500px) {
        margin: 30px 0;
        width: 100%;
        ${flexCenter};

        p {
            margin-top: 20px;
            text-align: center;
        }
    }
`;

export const TileIconContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    ${flexCenter};
    width: 70px;
    height: 70px;
    padding: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.light_blue};

    svg {
        ${size_100x100};
    }

    @media screen and (max-width: 1350px) {
        width: 70px;
        height: 70px;
    }

    @media screen and (max-width: 838px) {
        right: 50%;
    }
`;

const TileComponent = (props) => <Container>{props.children}</Container>;
export default TileComponent;
