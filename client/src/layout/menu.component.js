import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { absoluteCenter } from "./../components/mixins";
import gsap from "gsap";
import scrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(scrollToPlugin);

const Navigation = styled.nav`
    position: sticky;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.blue};
    width: 100%;
    min-height: 80px;
    padding: 0px 80px;

    .links {
        display: flex;

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
    }

    h2 {
        ${absoluteCenter};
        color: ${({ theme }) => theme.colors.beige};
        text-transform: uppercase;
        text-align: center;
        width: 100%;
        padding: 20px 0 0;

        @media screen and (max-width: 900px) {
            & {
                font-size: ${({ theme }) => theme.fz.XL};
            }
        }

        @media screen and (max-width: 700px) {
            & {
                font-size: ${({ theme }) => theme.fz.L};
            }
        }

        @media screen and (max-width: 560px) {
            & {
                position: relative;
                top: -5px;
                left: unset;
                transform: none;
                text-align: left;
            }
        }

        @media screen and (max-width: 400px) {
            & {
                font-size: ${({ theme }) => theme.fz.S};
            }
        }
    }

    @media screen and (max-width: 1580px) {
        & {
            padding: 0px 40px;
        }
    }

    @media screen and (max-width: 1450px) {
        .links {
            padding: 40px 0;
            flex-direction: column;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            transition: 0.5s;
            transform: translate(-100%, 100%);
            background-color: ${({ theme }) => theme.colors.blue};

            &.active {
                transform: translate(0, 100%);
            }
        }
    }
`;

const Hamburger = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
    transition: 0.3s;
    cursor: pointer;
    display: none;

    &:hover {
        background-color: ${({ theme }) => theme.colors.darker_blue};
    }

    &:hover span {
        background-color: ${({ theme }) => theme.colors.white};
    }

    &.active {
        background-color: ${({ theme }) => theme.colors.darker_blue};

        & span {
            background-color: ${({ theme }) => theme.colors.white};

            &:nth-of-type(1) {
                top: 50%;
                transform: translate(-50%, -50%) rotate(45deg);
            }
            &:nth-of-type(2) {
                opacity: 0;
            }
            &:nth-of-type(3) {
                top: 50%;
                transform: translate(-50%, -50%) rotate(-45deg);
            }
        }
    }

    span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 55%;
        height: 2px;
        transition: 0.3s;
        background-color: ${({ theme }) => theme.colors.darker_blue};

        &:nth-of-type(1) {
            top: 17px;
        }

        &:nth-of-type(2) {
            top: 25px;
        }

        &:nth-of-type(3) {
            top: 33px;
        }
    }

    @media screen and (max-width: 1450px) {
        & {
            display: block;
        }
    }

    @media screen and (max-width: 700px) {
        & {
            right: 30px;
        }
    }
`;

const NavigationComponent = (props) => {
    const scrollTo = (hash) => () => {
        console.log(hash);
        gsap.to(window, { scrollTo: hash });
    };

    const [hamburgerActive, setHamburgerActive] = useState(false);

    return (
        <Navigation>
            <div className={`links ${hamburgerActive ? "active" : ""}`}>
                <Link to="#glowna" onClick={scrollTo("#glowna")}>
                    Strona Główna
                </Link>
                <Link to="#niezbednik" onClick={scrollTo("#niezbednik")}>
                    Niezbędnik
                </Link>
                <Link to="#kontakt" onClick={scrollTo("#kontakt")}>
                    Kontakt
                </Link>
            </div>
            <h2>wkrótce premiera</h2>
            <Hamburger
                className={hamburgerActive ? "active" : ""}
                onClick={() => setHamburgerActive((prev) => !prev)}
            >
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
        </Navigation>
    );
};

export default NavigationComponent;
