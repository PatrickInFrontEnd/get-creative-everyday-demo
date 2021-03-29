import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import scrollToPlugin from "gsap/ScrollToPlugin";
import { SocialMediasComponentPL } from "../components/SocialMedia/SocialMedia.component";

gsap.registerPlugin(scrollToPlugin);

export const Navigation = styled.nav`
    position: sticky;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.white};
    width: 100%;
    min-height: 80px;
    padding: 0px 80px;

    .links {
        display: flex;

        i {
            font-size: ${({ theme }) => theme.fz.S || "22px"};
        }

        a {
            position: relative;
            overflow: hidden;
            z-index: 1;
            color: ${({ theme }) => theme.colors.black || "#ffffff"};
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
                background-color: #0d0d0d;
                transition: 0.3s;
            }
        }
    }

    @media screen and (max-width: 1580px) {
        & {
            padding: 0px 40px;
        }
    }

    @media screen and (max-width: 1450px) {
        padding: 0;

        .links {
            padding: 40px 0;

            &.eng {
                padding: 90px 0 40px;

                @media screen and (max-width: 470px) {
                    padding: 50px 0 40px;
                }

                @media screen and (max-width: 420px) {
                    padding: 0 0 20px;
                }
            }

            flex-direction: column;
            align-items: center;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            transition: 0.5s;
            transform: translate(-100%, 100%);
            background-color: ${({ theme }) => theme.colors.white};

            &.active {
                transform: translate(0, 100%);
            }
        }
    }
`;

export const Hamburger = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    right: 80px;
    transform: translateY(-50%);
    background-color: ${({ theme }) => theme.colors.grey};
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
        background-color: ${({ theme }) => theme.colors.white};

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
    const scrollTo = (hash) => gsap.to(window, { scrollTo: hash });

    const [hamburgerActive, setHamburgerActive] = useState(false);

    const toggleHamburgerActive = () => setHamburgerActive((prev) => !prev);

    const handleMobileClick = () => {
        if (window.innerWidth <= 1450) toggleHamburgerActive();
    };

    return (
        <Navigation>
            <div className={`links ${hamburgerActive ? "active" : ""}`}>
                <Link
                    to="#"
                    onClick={() => {
                        scrollTo(0);
                        handleMobileClick();
                    }}
                >
                    <i className="fas fa-home"></i>
                </Link>
                <Link
                    to="#niezbednik"
                    onClick={() => {
                        scrollTo("#niezbednik");
                        handleMobileClick();
                    }}
                >
                    Niezbędnik
                </Link>
                <Link
                    to="#kontakt"
                    onClick={() => {
                        scrollTo("#kontakt");
                        handleMobileClick();
                    }}
                >
                    Kontakt
                </Link>
            </div>

            <SocialMediasComponentPL isActive={hamburgerActive} />

            <Hamburger
                className={hamburgerActive ? "active" : ""}
                onClick={toggleHamburgerActive}
            >
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
        </Navigation>
    );
};

export default NavigationComponent;
