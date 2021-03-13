import React from "react";
import styled from "styled-components";
import { flexCenter, size_100x100 } from "./../../mixins";

const Container = styled.div`
    position: relative;
    width: 350px;
    height: 220px;
    margin: 30px;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.darker_blue};

    p {
        width: 100%;
        font-weight: ${({ theme }) => theme.fw.medium};
    }
`;

export const TileIconContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(50%, -50%);
    ${flexCenter};
    width: 80px;
    height: 80px;
    padding: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darker_blue};

    svg {
        ${size_100x100};
    }
`;

const TileComponent = (props) => <Container>{props.children}</Container>;
export default TileComponent;
