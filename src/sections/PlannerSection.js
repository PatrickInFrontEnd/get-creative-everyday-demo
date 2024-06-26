import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { HeaderNormal, HeaderHola } from "./../components/atoms/Header";
import { flexCenter } from "../components/mixins";
import { ReactComponent as CloudIcon } from "./../assets/svg/cloud.svg";
import GCED_detailsPNG from "./../assets/img/gced_details.png";
import GCED_details_PL_PNG from "./../assets/img/gced_details_PL.png";
import GCED_detailsMobile from "./../assets/img/GCED_mockup.png";
import {
    IncludeHeader /* ListedHeader */,
} from "./../components/IncludeHeader";
import { BuyNowButton } from "./BuyPlannerSection";
import SliderComponent from "../components/PlannerSlider/Slider.component";
import SliderProvider from "./../providers/sliderProvider";
import { useTranslation } from "react-i18next";
import { languageContext } from "../providers/languageProvider";

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
    width: 70%;
    object-fit: contain;
    display: block;
    margin: 30px auto 0;

    @media screen and (max-width: 1540px) {
        width: 80%;
        max-width: 1000px;
    }

    @media screen and (max-width: 900px) {
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

const BuyButton = styled(BuyNowButton)`
    position: relative;
    top: unset;
    left: unset;
    bottom: unset;
    right: unset;
    transform: none;
    max-width: 250px;
    text-align: center;
    ${({ big }) => (big ? "max-width:350px" : "")};
    margin: 0 auto;

    @media screen and (max-width: 560px) {
        max-width: 80%;
    }
`;

export const PlannerSection = (props) => {
    const { t } = useTranslation();
    const { language } = useContext(languageContext);

    const slides = t("slides", { returnObjects: true });
    const buyHeaders = t("buyHeaders", { returnObjects: true });

    const buyHeadersItems = buyHeaders.map((elProps, i) => (
        <IncludeHeader {...elProps} inverted key={i} />
    ));

    const renderPhoto = () =>
        language === "pl" ? (
            <Photo
                src={
                    window.innerWidth >= 900
                        ? GCED_details_PL_PNG
                        : GCED_detailsMobile
                }
                alt="Get creative every day planer - szczegóły"
            />
        ) : (
            <Photo
                src={
                    window.innerWidth >= 900
                        ? GCED_detailsPNG
                        : GCED_detailsMobile
                }
                alt="Get creative every day planner details"
            />
        );

    return (
        <section
            id={t("navigation.about.link")}
            style={{ padding: "40px 0", textAlign: "left" }}
        >
            <HeaderContainer>
                <HeaderNormal uppercase>
                    <p className="bigger-line">{t("atoms.meetExpectations")}</p>
                </HeaderNormal>
                <CloudIcon />
                <CloudIcon />
            </HeaderContainer>

            <HeaderContainer>
                <HeaderHola>
                    <h1>STOP!</h1>
                </HeaderHola>

                <HeaderNormal uppercase>
                    <h1 className="bold">{t("atoms.youFoundIt")}</h1>
                </HeaderNormal>
                <CloudIcon />
                <CloudIcon />
            </HeaderContainer>

            <SliderProvider slides={slides}>
                <SliderComponent />
            </SliderProvider>

            <IncludeContainer>{buyHeadersItems}</IncludeContainer>

            {renderPhoto()}

            <BuyButton
                href={t("externalLinks.shop")}
                target="_blank"
                id="buy"
                big
            >
                {t("atoms.buyNow")}
            </BuyButton>
        </section>
    );
};

export default PlannerSection;

/* 
    REFS:
    <Photo
                src={
                    window.innerWidth >= 900
                        ? GCED_details_PL_PNG
                        : GCED_detailsMobile
                }
                alt="Get creative every day planner details"
            />
*/
