import React from "react";
import styled from "styled-components";
import { HeaderNormal, HeaderHola } from "./../components/atoms/Header";
import { flexCenter } from "../components/mixins";
import { ReactComponent as CloudIcon } from "./../assets/svg/cloud.svg";
import GCED_detailsPNG from "./../assets/img/gced_details.png";
import GCED_detailsMobile from "./../assets/img/GCED_mockup.png";

const HeaderContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 1200px;
    ${flexCenter};
    flex-direction: column;
    margin: 0 auto 50px;
    padding: 0 30px;

    &:nth-of-type(1) {
        svg {
            position: absolute;

            &:nth-of-type(1) {
                top: -105px;
                left: -18%;
                transform: scale(0.9);
            }

            &:nth-of-type(2) {
                top: -80px;
                right: -18%;
                transform: rotate(30deg) scale(1.2);
            }
        }

        @media screen and (max-width: 1710px) {
            svg {
                &:nth-of-type(1) {
                    top: 50px;
                    left: 10%;
                    transform: scale(0.6);
                }

                &:nth-of-type(2) {
                    display: none;
                }
            }
        }

        @media screen and (max-width: 780px) {
            svg {
                &:nth-of-type(1) {
                    display: none;
                }
            }
        }
    }
    &:nth-of-type(2) {
        svg {
            position: absolute;

            &:nth-of-type(1) {
                top: -40px;
                right: 0%;
                transform: rotate(-30deg) scale(0.5);
            }

            &:nth-of-type(2) {
                top: unset;
                bottom: -100px;
                left: 0;
                transform: rotate(-30deg) scale(0.5);
            }
        }

        @media screen and (max-width: 780px) {
            svg {
                &:nth-of-type(1) {
                    top: -50px;
                    right: 8%;
                }

                &:nth-of-type(2) {
                    bottom: unset;
                    top: -50px;
                    left: 8%;
                }
            }
        }

        @media screen and (max-width: 520px) {
            svg {
                &:nth-of-type(1) {
                    transform: rotate(-30deg) scale(0.4);
                }

                &:nth-of-type(2) {
                    transform: rotate(-30deg) scale(0.4);
                }
            }
        }

        @media screen and (max-width: 420px) {
            svg {
                &:nth-of-type(1) {
                    top: -70px;
                    right: -20px;
                }

                &:nth-of-type(2) {
                    bottom: unset;
                    top: -70px;
                    left: -20px;
                }
            }
        }
    }
`;

const Photo = styled.img`
    width: 1400px;
    height: 780px;
    object-fit: contain;
    display: block;
    margin: 0px auto 50px;

    @media screen and (max-width: 1540px) {
        width: 80%;
        height: auto;
        max-height: 500px;
    }
`;
const PlannerSection = (props) => {
    return (
        <section id="planner" style={{ padding: "40px 0" }}>
            <HeaderContainer>
                <HeaderNormal uppercase>
                    <p className="bigger-line">
                        Are you still looking for an ideal planner that will
                        meet all your expectations?
                    </p>
                </HeaderNormal>
                <CloudIcon />
                <CloudIcon />
            </HeaderContainer>

            <HeaderContainer>
                <HeaderHola>
                    <h1>STOP!</h1>
                </HeaderHola>

                <HeaderNormal uppercase>
                    <h1 className="bold">you've just found it!</h1>
                </HeaderNormal>
                <CloudIcon />
                <CloudIcon />
            </HeaderContainer>
            <Photo
                src={
                    window.innerWidth >= 900
                        ? GCED_detailsPNG
                        : GCED_detailsMobile
                }
                alt="Get creative every day planner details"
            />

            <HeaderHola uppercase>
                <h2>get creative every day includes:</h2>
            </HeaderHola>
        </section>
    );
};

export default PlannerSection;
