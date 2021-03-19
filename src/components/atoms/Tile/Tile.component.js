import React from "react";
import styled from "styled-components";
import { flexCenter, size_100x100 } from "./../../mixins";

const Container = styled.div`
    position: relative;
    width: 340px;
    height: 200px;
    margin: 0 30px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.black};

    h4 {
        font-size: ${({ theme }) => theme.fz.M};
        font-weight: ${({ theme }) => theme.fw.semiBold};
        color: ${({ theme }) => theme.colors.black};
    }

    p {
        width: 100%;
        font-size: ${({ theme }) => theme.fz.XXS};
        color: ${({ theme }) => theme.colors.grey};
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
        fill: ${({ theme }) => theme.colors.yellow};
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
