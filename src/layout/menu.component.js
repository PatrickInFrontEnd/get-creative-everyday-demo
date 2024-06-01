import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import scrollToPlugin from "gsap/ScrollToPlugin";
import { SocialMediasComponentPL } from "../components/SocialMedia/SocialMedia.component";
import { flexCenter, flexColumn } from "../components/mixins";
import flagPL from "./../assets/img/flags/polish.png";
import flagENG from "./../assets/img/flags/english.png";
import flagESP from "./../assets/img/flags/spanish.png";
import { useTranslation } from "react-i18next";

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

        .list {
            ${flexCenter};
            position: relative;
            margin: 0 20px 0;

            & > p {
                position: relative;
                overflow: hidden;
                ${flexCenter};
                padding: 8px 12px;
                z-index: 1;
                color: ${({ theme }) => theme.colors.black || "#ffffff"};
                font-size: ${({ theme }) => theme.fz.XXS || "18px"};
                font-weight: ${({ theme }) => theme.fw.semiBold};
                text-transform: capitalize;
                transition: 0.3s;
                cursor: pointer;
            }

            &:hover ul {
                visibility: visible;
                opacity: 1;
            }

            ul {
                ${flexColumn};
                align-items: flex-start;
                position: absolute;
                visibility: hidden;
                opacity: 0;
                transition: 0.3s all;
                left: 0;
                bottom: 0;
                transform: translateY(100%);
                width: 100%;
                min-width: 150px;
                padding: 5px 10px;
                background-color: ${({ theme }) => theme.colors.black};

                li {
                    ${flexCenter};
                    justify-content: flex-start;
                    width: 100%;
                    border-bottom: 1px solid
                        ${({ theme }) => theme.colors.white};

                    &:last-of-type {
                        border-bottom: none;
                    }

                    a {
                        ${flexCenter};
                        justify-content: flex-start;
                        width: 100%;
                        padding: 15px 10px;
                        margin: 0;

                        img {
                            width: 30px;
                            height: 30px;
                            object-fit: fill;
                            object-position: center center;
                            margin-right: 10px;
                        }

                        p {
                            color: ${({ theme }) => theme.colors.white};
                            font-size: ${({ theme }) => theme.fz.XXXS};
                            font-weight: ${({ theme }) => theme.fw.semiBold};
                            text-transform: capitalize;
                        }
                    }
                }
            }
        }

        a {
            position: relative;
            overflow: hidden;
            ${flexCenter};
            z-index: 1;
            color: ${({ theme }) => theme.colors.black || "#ffffff"};
            font-size: ${({ theme }) => theme.fz.XXS || "18px"};
            font-weight: ${({ theme }) => theme.fw.semiBold};
            margin: 0 20px 0;
            padding-bottom: 4px; /* When active button: remove this line */

            &.active {
                overflow: hidden;
                border: 3px solid ${({ theme }) => theme.colors.black};
                padding: 8px 12px;
                transition: 0.3s;

                &::before {
                    display: none;
                }

                &::after {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    transform: translateY(100%);
                    content: "";
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    transition: 0.3s;
                    background-color: ${({ theme }) => theme.colors.black};
                }

                &:hover {
                    color: ${({ theme }) => theme.colors.white};

                    &::after {
                        transform: translateY(0%);
                    }
                }
            }

            &:hover::before {
                transform: translateX(0%);
            }

            &::before {
                position: absolute;
                bottom: 2px; /* When active button: 2px */
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

                @media screen and (max-width: 420px) {
                    padding: 0 0 20px;
                }
            }

            a {
                margin: 10px 0;
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
    const { t } = useTranslation();

    const scrollTo = (hash, offset = 0) =>
        gsap.to(window, {
            scrollTo: { offsetY: offset, y: hash },
            duration: 1,
        });

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
                    to="#przyklady"
                    onClick={() => {
                        scrollTo("#przyklady", 100);
                        handleMobileClick();
                    }}
                >
                    Przykłady użycia
                </Link>

                <Link
                    to="#planer"
                    onClick={() => {
                        scrollTo("#planer", 140);
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

                <Link
                    to="#newsletter"
                    onClick={() => {
                        scrollTo("#newsletter", 150);
                        handleMobileClick();
                    }}
                >
                    Newsletter
                </Link>

                <a
                    className="active"
                    href={t("externalLinks.shop")}
                    target="_blank"
                    rel="noreferrer"
                >
                    {t("atoms.buyNow")}
                </a>

                <div className="list">
                    <p>Zmień język</p>
                    <ul>
                        <li onClick={() => scrollTo(0, 0)}>
                            <Link to="/pl/">
                                <img
                                    src={flagPL}
                                    alt="Flaga Polski"
                                    width="40"
                                    height="40"
                                />
                                <p>Polski</p>
                            </Link>
                        </li>
                        <li onClick={() => scrollTo(0, 0)}>
                            <Link to="/">
                                <img
                                    src={flagENG}
                                    alt="Flaga Brytanii"
                                    width="40"
                                    height="40"
                                />
                                <p>English</p>
                            </Link>
                        </li>
                        <li onClick={() => scrollTo(0, 0)}>
                            <Link to="/esp/">
                                <img
                                    src={flagESP}
                                    alt="Flaga Hiszpanii"
                                    width="40"
                                    height="40"
                                />
                                <p>Española</p>
                            </Link>
                        </li>
                    </ul>
                </div>
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
