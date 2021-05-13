import React, { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import scrollToPlugin from "gsap/ScrollToPlugin";
import { Navigation, Hamburger } from "./menu.component";
import { SocialMediasComponentENG } from "../components/SocialMedia/SocialMedia.component";

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
