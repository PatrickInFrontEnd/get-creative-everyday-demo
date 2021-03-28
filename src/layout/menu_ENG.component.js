import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import scrollToPlugin from "gsap/ScrollToPlugin";
import { Navigation, Hamburger } from "./menu.component";
import { SocialMediasComponentENG } from "../components/SocialMedia/SocialMedia.component";

gsap.registerPlugin(scrollToPlugin);

const NavigationComponent = (props) => {
    const scrollTo = (hash) => gsap.to(window, { scrollTo: hash });

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
                    to="#kit"
                    onClick={() => {
                        scrollTo("#kit");
                        handleMobileClick();
                    }}
                >
                    About kit
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
