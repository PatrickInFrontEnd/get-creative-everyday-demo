import React from "react";
import styled from "styled-components";
import { HeaderNormal, HeaderHola } from "./../components/atoms/Header";
import { flexCenter } from "../components/mixins";
import { ReactComponent as CloudIcon } from "./../assets/svg/cloud.svg";
import { ReactComponent as EmoteIcon } from "./../assets/svg/emote.svg";
import GCED_detailsPNG from "./../assets/img/gced_details.png";
import GCED_details_PL_PNG from "./../assets/img/gced_details_PL.png";
import GCED_detailsMobile from "./../assets/img/GCED_mockup.png";
import GCED_BuyPNG from "./../assets/img/GCED_flat_mockup.png";
import { IncludeHeader, ListedHeader } from "./../components/IncludeHeader";
import { detailsBoxesENG, buyHeadersENG } from "./../data/eng";
import { detailsBoxesPL, buyHeadersPL } from "./../data/pl";

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

const IncludeContainer = styled.div`
    padding: 0 200px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    ul {
        margin-bottom: 40px;
        li {
            margin: 0 0 20px 40px;
            font-family: ${({ theme }) => theme.ff.Montserrat};
            font-weight: ${({ theme }) => theme.fw.light};
            font-size: ${({ theme }) => theme.fz.normal.small};
            color: ${({ theme }) => theme.colors.black};

            &:last-of-type {
                margin: 0 0 0 40px;
            }
        }
    }

    @media screen and (max-width: 1200px) {
        padding: 0 100px;

        ul {
            li {
                margin: 0 0 20px 40px;
                font-size: ${({ theme }) => theme.fz.S};
            }
        }
    }

    @media screen and (max-width: 700px) {
        padding: 0 60px;
    }

    @media screen and (max-width: 570px) {
        align-items: center;
    }

    @media screen and (max-width: 450px) {
        padding: 0 30px;

        ul li {
            margin: 0 0 10px 20px;

            &:last-of-type {
                margin: 0 0 10px 20px;
            }
        }
    }
`;

const BuyPlannerSection = styled.div`
    position: relative;
    ${flexCenter};
    width: 500px;
    margin: 0 auto;
    padding: 0 0 40px;

    img {
        width: 450px;
        object-fit: contain;
    }

    svg {
        position: absolute;
        width: 80px;
        height: 80px;

        &:nth-of-type(1) {
            top: 20%;
            left: -100px;
        }
        &:nth-of-type(2) {
            top: 60%;
            right: -100px;
            transform: rotate(30deg);
        }
    }

    @media screen and (max-width: 800px) {
        width: 70%;

        img {
            width: 100%;
        }

        svg {
            &:nth-of-type(1) {
                top: -2%;
                left: 0;
            }
            &:nth-of-type(2) {
                right: -2%;
            }
        }
    }

    @media screen and (max-width: 540px) {
        width: 90%;

        img {
            max-height: 400px;
        }

        svg {
            width: 50px;
            height: 50px;
        }
    }
`;

const BuyNowButton = styled.a`
    ${flexCenter};
    overflow: hidden;
    position: absolute;
    bottom: -2%;
    right: -25%;
    transform: translate(-50%, -50%);
    padding: 15px 60px 7.5px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.ff.HolaB};
    font-size: ${({ theme }) => theme.fz.hola.medium};
    line-height: 100%;
    text-transform: uppercase;
    border: 4px solid;
    transition: 0.3s;

    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
        z-index: -1;
        content: "";
        transition: 0.3s;
        width: 101%;
        height: 101%;
        background-color: ${({ theme }) => theme.colors.black};
    }

    &:hover {
        border: 4px solid ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
    }

    &:hover::before {
        transform: translateY(0);
    }

    @media screen and (max-width: 540px) {
        padding: 10px 40px 5px;
        min-width: 170px;
        font-size: ${({ theme }) => theme.fz.hola.small};
        bottom: unset;
        top: 0px;
        right: 50%;
        transform: translate(60%, 0);
    }
`;

export const PlannerSectionPL = (props) => {
    const includeHeaders = detailsBoxesPL.map((elProps, i) =>
        elProps.sublist ? (
            <ListedHeader {...elProps} key={i} />
        ) : (
            <IncludeHeader {...elProps} key={i} />
        )
    );

    const buyHeadersItems = buyHeadersPL.map((elProps, i) => (
        <IncludeHeader {...elProps} inverted key={i} />
    ));

    return (
        <section id="planer" style={{ padding: "40px 0", textAlign: "left" }}>
            <HeaderContainer>
                <HeaderNormal uppercase>
                    <p className="bigger-line">
                        Nadal poszukujesz idealnego plannera, który spełni
                        wszystkie Twoje oczekiwania?
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
                    <h1 className="bold">Masz go tutaj!</h1>
                </HeaderNormal>
                <CloudIcon />
                <CloudIcon />
            </HeaderContainer>
            <Photo
                src={
                    window.innerWidth >= 900
                        ? GCED_details_PL_PNG
                        : GCED_detailsMobile
                }
                alt="Get creative every day planner details"
            />

            <HeaderHola uppercase>
                <h2>W Get Creative Every Day znajdziesz:</h2>
            </HeaderHola>

            <IncludeContainer>{includeHeaders}</IncludeContainer>
            <IncludeContainer>{buyHeadersItems}</IncludeContainer>

            <BuyPlannerSection id="kup">
                <img src={GCED_BuyPNG} alt="Planner" />
                {/* BuyNowButton id=buy*/}
                <EmoteIcon />
                <EmoteIcon />
            </BuyPlannerSection>
        </section>
    );
};

const PlannerSection = (props) => {
    const includeHeaders = detailsBoxesENG.map((elProps, i) =>
        elProps.sublist ? (
            <ListedHeader {...elProps} key={i} />
        ) : (
            <IncludeHeader {...elProps} key={i} />
        )
    );

    const buyHeadersItems = buyHeadersENG.map((elProps, i) => (
        <IncludeHeader {...elProps} inverted key={i} />
    ));

    return (
        <section id="planner" style={{ padding: "40px 0", textAlign: "left" }}>
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

            <IncludeContainer>{includeHeaders}</IncludeContainer>
            <IncludeContainer>{buyHeadersItems}</IncludeContainer>

            <BuyPlannerSection id="buy">
                <img src={GCED_BuyPNG} alt="Planner" />
                {/* BuyNowButton id=buy*/}
                <EmoteIcon />
                <EmoteIcon />
            </BuyPlannerSection>
        </section>
    );
};

export default PlannerSection;
