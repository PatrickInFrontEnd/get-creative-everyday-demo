import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import scrollToPlugin from "gsap/ScrollToPlugin";
import { Navigation, Hamburger } from "./menu.component";
import { SocialMediasComponentENG } from "../components/SocialMedia/SocialMedia.component";
import flagPL from "./../assets/img/flags/polish.png";
import flagENG from "./../assets/img/flags/english.png";
import flagESP from "./../assets/img/flags/spanish.png";

gsap.registerPlugin(scrollToPlugin);

const NavigationComponent = (props) => {
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
            <div className={`links ${hamburgerActive ? "active" : ""} eng`}>
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
                    to="#situations"
                    onClick={() => {
                        scrollTo("#situations", 100);
                        handleMobileClick();
                    }}
                >
                    Examples of use
                </Link>
                <Link
                    to="#planner"
                    onClick={() => {
                        scrollTo("#planner", 180);
                        handleMobileClick();
                    }}
                >
                    About planner
                </Link>

                <Link
                    to="#contact"
                    onClick={() => {
                        scrollTo("#contact");
                        handleMobileClick();
                    }}
                >
                    Contact
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
                    href="https://shop.getcreative-everyday.com/collection/frontpage/get-creative-every-day"
                    target="_blank"
                    rel="noreferrer"
                >
                    BUY NOW
                </a>
                <div className="list">
                    <p>Change Language</p>
                    <ul>
                        <li>
                            <Link to="/pl/">
                                <img
                                    src={flagPL}
                                    alt="Polish flag"
                                    width="40"
                                    height="40"
                                />
                                <p>PL</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img
                                    src={flagENG}
                                    alt="Britain flag"
                                    width="40"
                                    height="40"
                                />
                                <p>ENG</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/esp/">
                                <img
                                    src={flagESP}
                                    alt="Spanish flag"
                                    width="40"
                                    height="40"
                                />
                                <p>ESP</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <SocialMediasComponentENG isActive={hamburgerActive} />

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

export const NavigationComponentSPANISH = (props) => {
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
            <div className={`links ${hamburgerActive ? "active" : ""} eng`}>
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
                    to="#ejemplos"
                    onClick={() => {
                        scrollTo("#ejemplos", 100);
                        handleMobileClick();
                    }}
                >
                    Ejemplos de uso
                </Link>
                <Link
                    to="#planner"
                    onClick={() => {
                        scrollTo("#planner", 180);
                        handleMobileClick();
                    }}
                >
                    Planificador
                </Link>

                <Link
                    to="#contact"
                    onClick={() => {
                        scrollTo("#contact");
                        handleMobileClick();
                    }}
                >
                    Contacto
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
                    href="https://shop.getcreative-everyday.com/collection/frontpage/get-creative-every-day"
                    target="_blank"
                    rel="noreferrer"
                >
                    COMPRA AHORA
                </a>
                <div className="list">
                    <p>Cambiar idioma</p>
                    <ul>
                        <li>
                            <Link to="/pl/">
                                <img
                                    src={flagPL}
                                    alt="Bandera polaca"
                                    width="40"
                                    height="40"
                                />
                                <p>PL</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <img
                                    src={flagENG}
                                    alt="La bandera de Gran Bretaña"
                                    width="40"
                                    height="40"
                                />
                                <p>ENG</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/esp/">
                                <img
                                    src={flagESP}
                                    alt="Bandera de españa"
                                    width="40"
                                    height="40"
                                />
                                <p>ESP</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <SocialMediasComponentENG isActive={hamburgerActive} />

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
