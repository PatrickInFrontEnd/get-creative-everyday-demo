import React, { memo } from "react";
import styled, { useTheme } from "styled-components";
import { HeaderHola } from "./../components/atoms/Header";
import { ReactComponent as PencilIcon } from "./../assets/svg/pencil.svg";
import SituationBox from "./../components/SituationBox/SituationBox";
import { situationsPL } from "./../data/pl";
import { situationsENG } from "./../data/eng";
import { situationsSPANISH } from "./../data/esp";
import SituationsContainer from "../components/SituationsContainer/Situations.container";

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

export const SituationsSectionPL = memo((props) => {
    const situationBoxes = situationsPL.map((properties, i) => (
        <SituationBox key={i} {...properties} />
    ));

    const theme = useTheme();

    return (
        <section
            id="przyklady"
            style={{ textAlign: "center", padding: "40px 0" }}
        >
            <HeaderContainer>
                <HeaderHola uppercase>
                    <h2 style={{ color: theme.colors.dark_grey }}>
                        Czy Get Creative Every Day na pewno jest dla Ciebie?
                    </h2>
                    <h1>Sprawdź!</h1>
                </HeaderHola>
                <PencilIcon />
                <PencilIcon />
            </HeaderContainer>
            <SituationsContainer>{situationBoxes}</SituationsContainer>
        </section>
    );
});

export const SituationsSectionSPANISH = memo((props) => {
    const situationBoxes = situationsSPANISH.map((properties, i) => (
        <SituationBox key={i} {...properties} />
    ));

    const theme = useTheme();

    return (
        <section
            id="ejemplos"
            style={{ textAlign: "center", padding: "40px 0" }}
        >
            <HeaderContainer>
                <HeaderHola uppercase>
                    <h2 style={{ color: theme.colors.dark_grey }}>
                        ¿Estás seguro de que Get Creative Every Day es para ti?
                    </h2>
                    <h1>¡Compruébalo!</h1>
                </HeaderHola>
                <PencilIcon />
                <PencilIcon />
            </HeaderContainer>
            <SituationsContainer>{situationBoxes}</SituationsContainer>
        </section>
    );
});

const SituationsSection = memo((props) => {
    const situationBoxes = situationsENG.map((properties, i) => (
        <SituationBox key={i} {...properties} />
    ));

    const theme = useTheme();

    return (
        <section
            id="situations"
            style={{ textAlign: "center", padding: "40px 0" }}
        >
            <HeaderContainer>
                <HeaderHola uppercase>
                    <h2 style={{ color: theme.colors.dark_grey }}>
                        Is the planner Get Creative Every Day suitable for you?
                    </h2>
                    <h1>Check it out!</h1>
                </HeaderHola>
                <PencilIcon />
                <PencilIcon />
            </HeaderContainer>
            <SituationsContainer>{situationBoxes}</SituationsContainer>
        </section>
    );
});

export default SituationsSection;
