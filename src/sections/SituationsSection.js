import React, { memo } from "react";
import styled, { useTheme } from "styled-components";
import { HeaderHola } from "./../components/atoms/Header";
import { ReactComponent as PencilIcon } from "./../assets/svg/pencil.svg";
import SituationBox from "./../components/SituationBox/SituationBox";
import SituationsContainer from "../components/SituationsContainer/Situations.container";
import { useTranslation } from "react-i18next";

const HeaderContainer = styled.div`
    position: relative;
    display: inline-block;
    max-width: 700px;
    padding: 0 20px;
    margin-bottom: 20px;

    h2 {
        line-height: 100%;
    }

    svg {
        position: absolute;

        &:nth-of-type(1) {
            bottom: 0px;
            left: 40px;
            transform: scale(-1);
        }
        &:nth-of-type(2) {
            bottom: 0px;
            right: 40px;
            transform: scaleY(-1);
        }
    }

    @media screen and (max-width: 1558px) {
        svg {
            &:nth-of-type(1) {
                left: 22%;
                bottom: -14%;
                transform: scaleY(-1);
            }
            &:nth-of-type(2) {
                right: 22%;
                bottom: -14%;
                transform: scale(-1);
            }
        }
    }

    @media screen and (max-width: 1100px) {
        svg {
            width: 75px;
            height: 75px;
        }
    }

    @media screen and (max-width: 570px) {
        svg {
            width: 60px;
            height: 60px;
        }
    }

    @media screen and (max-width: 470px) {
        svg {
            width: 50px;
            height: 50px;
            &:nth-of-type(1) {
                left: 10%;
            }
            &:nth-of-type(2) {
                right: 10%;
            }
        }
    }

    @media screen and (max-width: 350px) {
        svg {
            width: 50px;
            height: 50px;
            bottom: -20px;
        }
    }
`;

export const SituationsSection = memo((props) => {
    const { t } = useTranslation();

    const situationsResources = t("situations", { returnObjects: true });

    const situationBoxes = situationsResources.map((properties, i) => (
        <SituationBox key={i} {...properties} />
    ));

    const theme = useTheme();

    return (
        <section
            id={t("navigation.examples.link")}
            style={{ textAlign: "center", padding: "40px 0" }}
        >
            <HeaderContainer>
                <HeaderHola uppercase>
                    <h2 style={{ color: theme.colors.dark_grey }}>
                        {t("atoms.isPlannerGoodForYou")}
                    </h2>
                    <h1>{t("atoms.checkItOut")}</h1>
                </HeaderHola>
                <PencilIcon />
                <PencilIcon />
            </HeaderContainer>
            <SituationsContainer>{situationBoxes}</SituationsContainer>
        </section>
    );
});

export default SituationsSection;
