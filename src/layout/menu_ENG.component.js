import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import scrollToPlugin from "gsap/ScrollToPlugin";
import { Navigation, Hamburger } from "./menu.component";
import { SocialMediasComponentENG } from "../components/SocialMedia/SocialMedia.component";
import flagPL from "./../assets/img/flags/polish.png";
import flagENG from "./../assets/img/flags/english.png";
import flagESP from "./../assets/img/flags/spanish.png";
import { useTranslation } from "react-i18next";

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

    //i18n
    const { t } = useTranslation();

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
                    to={`#${t("navigation.examples.link")}`}
                    onClick={() => {
                        scrollTo(`#${t("navigation.examples.link")}`, 100);
                        handleMobileClick();
                    }}
                >
                    {t("navigation.examples.name")}
                </Link>

                <Link
                    to={`#${t("navigation.about.link")}`}
                    onClick={() => {
                        scrollTo(`#${t("navigation.about.link")}`, 180);
                        handleMobileClick();
                    }}
                >
                    {t("navigation.about.name")}
                </Link>

                <Link
                    to={`#${t("navigation.contact.link")}`}
                    onClick={() => {
                        scrollTo(`#${t("navigation.contact.link")}`);
                        handleMobileClick();
                    }}
                >
                    {t("navigation.contact.name")}
                </Link>

                <Link
                    to={`#${t("navigation.newsletter.link")}`}
                    onClick={() => {
                        scrollTo(`#${t("navigation.newsletter.link")}`, 150);
                        handleMobileClick();
                    }}
                >
                    {t("navigation.newsletter.name")}
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
                    <p>{t("navigation.changeLanguage.name")}</p>
                    <ul>
                        <li onClick={() => scrollTo(0, 0)}>
                            <Link to="/pl/">
                                <img
                                    src={flagPL}
                                    alt="Polish flag"
                                    width="40"
                                    height="40"
                                />
                                <p>{t("atoms.polish")}</p>
                            </Link>
                        </li>
                        <li onClick={() => scrollTo(0, 0)}>
                            <Link to="/">
                                <img
                                    src={flagENG}
                                    alt="Britain flag"
                                    width="40"
                                    height="40"
                                />
                                <p>{t("atoms.english")}</p>
                            </Link>
                        </li>
                        <li onClick={() => scrollTo(0, 0)}>
                            <Link to="/esp/">
                                <img
                                    src={flagESP}
                                    alt="Spanish flag"
                                    width="40"
                                    height="40"
                                />
                                <p>{t("atoms.spanish")}</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <SocialMediasComponentENG isActive={!!hamburgerActive} />

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
