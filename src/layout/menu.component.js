import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { absoluteCenter } from "./../components/mixins";

const Navigation = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-height: 80px;
    padding: 0px 80px;

    a {
        position: relative;
        overflow: hidden;
        z-index: 1;
        color: ${({ theme }) => theme.colors.white || "#ffffff"};
        font-size: ${({ theme }) => theme.fz.XXS || "18px"};
        font-weight: ${({ theme }) => theme.fw.semiBold};
        margin: 20px 20px 0;
        padding-bottom: 6px;

        &:hover::before {
            transform: translateX(0%);
        }

        &::before {
            position: absolute;
            bottom: 0px;
            left: 0;
            transform: translateX(-140%);
            content: "";
            width: 100%;
            height: 2px;
            background-color: #f5f5f5;
            transition: 0.3s;
        }
    }

    h2 {
        ${absoluteCenter};
        color: ${({ theme }) => theme.colors.beige};
        text-transform: uppercase;
        padding: 20px 0 0;
    }
`;

const NavigationComponent = (props) => (
    <Navigation>
        <Link to="#home">Strona Główna</Link>
        <Link to="#about">Niezbędnik</Link>
        <Link to="#contact">Kontakt</Link>
        <h2>wkrótce premiera</h2>
    </Navigation>
);

export default NavigationComponent;
