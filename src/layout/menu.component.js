import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { absoluteCenter } from "./../components/mixins";
import gsap from "gsap";
import scrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(scrollToPlugin);

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

const NavigationComponent = (props) => {
    const scrollTo = (hash) => () => {
        console.log(hash);
        gsap.to(window, { scrollTo: hash });
    };

    return (
        <Navigation>
            <Link to="#glowna" onClick={scrollTo("#glowna")}>
                Strona Główna
            </Link>
            <Link to="#niezbednik" onClick={scrollTo("#niezbednik")}>
                Niezbędnik
            </Link>
            <Link to="#kontakt" onClick={scrollTo("#kontakt")}>
                Kontakt
            </Link>
            <h2>wkrótce premiera</h2>
        </Navigation>
    );
};

export default NavigationComponent;
