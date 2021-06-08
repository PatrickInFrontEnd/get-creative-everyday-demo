import React, { memo } from "react";
import styled from "styled-components";
import { flexCenter } from "../components/mixins";
import { HeaderHola } from "./../components/atoms/Header";
import { ReactComponent as SunIcon } from "./../assets/svg/sun.svg";
import { ReactComponent as ClipIcon } from "./../assets/svg/clip.svg";
import FireworksIcon from "./../assets/img/fireworks.png";
import GCEDLogotypePNG from "./../assets/img/gced_logo.png";
import { useTheme } from "styled-components";

const QuestionsContainer = styled.div`
    ${flexCenter};
    flex-direction: column;
    position: relative;
    width: 100%;
    padding: 30px;
    margin: 50px 0;

    svg {
        position: absolute;
        z-index: -1;

        &:nth-of-type(1) {
            top: 20px;
            left: 120px;
        }
        &:nth-of-type(2) {
            bottom: 20px;
            right: 120px;
            transform: scaleX(-1) scale(1.25);
        }
    }

    @media screen and (max-width: 1140px) {
        margin: 80px 0;

        svg {
            &:nth-of-type(1) {
                top: -60px;
            }
            &:nth-of-type(2) {
                bottom: -60px;
            }
        }
    }

    @media screen and (max-width: 520px) {
        svg {
            &:nth-of-type(1) {
                left: 20px;
            }
            &:nth-of-type(2) {
                right: 40px;
            }
        }
    }
`;

const HeaderContainer = styled.div`
    position: relative;
    display: inline-block;
    text-align: center;
    margin: 120px auto 80px;
    min-width: 170px;

    img {
        display: block;
        position: absolute;
        top: 10%;
        transform: translateY(-50%);
        z-index: -1;

        &:nth-of-type(1) {
            left: -130%;
        }
        &:nth-of-type(2) {
            right: -130%;
            transform: translateY(-50%) scaleX(-1);
        }
    }

    @media screen and (max-width: 1000px) {
        margin: 120px auto 30px;

        img {
            width: 200px;
            height: 200px;

            &:nth-of-type(1) {
                left: -100%;
            }
            &:nth-of-type(2) {
                right: -100%;
            }
        }
    }

    @media screen and (max-width: 860px) {
        min-width: 120px;
    }

    @media screen and (max-width: 400px) {
        margin: 80px auto 30px;

        img {
            width: 150px;
            height: 150px;

            &:nth-of-type(1) {
                left: -75%;
            }
            &:nth-of-type(2) {
                right: -75%;
            }
        }
    }
`;

const HereYouAreContainer = styled.div`
    ${flexCenter};
    width: 100%;
    min-height: 300px;

    @media screen and (max-width: 1250px) {
        flex-direction: column;
    }
`;

const Logo = styled.div`
    ${flexCenter};
    flex-direction: column;
    margin-right: 150px;

    img {
        display: block;
        max-width: 550px;
    }

    @media screen and (max-width: 1550px) {
        img {
            max-width: 400px;
        }
    }

    @media screen and (max-width: 1250px) {
        margin: 0;
    }

    @media screen and (max-width: 470px) {
        img {
            max-width: 280px;
        }
    }
`;

const NoteCard = styled.div`
    position: relative;
    ${flexCenter};
    width: 60%;
    max-width: 700px;
    min-height: 350px;
    padding: 80px 30px 40px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.yellow};

    svg {
        position: absolute;
        top: -25px;
        right: -25px;
    }

    @media screen and (max-width: 1550px) {
        max-width: 600px;
        min-height: 300px;

        h2 {
            font-size: ${({ theme }) => theme.fz.hola.medium};
        }
    }

    @media screen and (max-width: 880px) {
        svg {
            transform: scale(0.8);
        }
    }

    @media screen and (max-width: 750px) {
        max-width: unset;
        border-radius: 0;
        width: 100%;
        min-height: 300px;

        svg {
            top: -20px;
            right: unset;
            left: 25px;
            transform: rotate(-65deg) scale(0.7);
        }
    }

    @media screen and (max-width: 470px) {
        min-height: 250px;
        padding: 40px 20px;
    }
`;

export const GetCreativeTrailerSectionPL = memo((props) => {
    const theme = useTheme();

    return (
        <section id="trailer" style={{ textAlign: "center", margin: "40px 0" }}>
            <QuestionsContainer>
                <SunIcon />
                <SunIcon />

                <HeaderHola>
                    <h2>Czy to możliwe?</h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>Organizator, inspirator i time-saver w jednym?</h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>Dedykowany nauczycielom angielskiego?</h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>Already fully in English?</h2>
                </HeaderHola>
            </QuestionsContainer>

            <HeaderContainer>
                <HeaderHola uppercase>
                    <h2>
                        yess!!!
                        <br />
                        oto on
                    </h2>
                </HeaderHola>

                <img src={FireworksIcon} alt="firworks icon" />
                <img src={FireworksIcon} alt="firworks icon" />
            </HeaderContainer>

            <HereYouAreContainer>
                <Logo>
                    <img src={GCEDLogotypePNG} alt="Get creative every day" />
                    <HeaderHola color={theme.colors.dark_grey}>
                        <h2>School Year 2021/2022</h2>
                    </HeaderHola>
                </Logo>

                <NoteCard>
                    <HeaderHola uppercase>
                        <h2>
                            Zapewniamy nauczycielską kreatywność każdego dnia!
                        </h2>
                    </HeaderHola>
                    <ClipIcon />
                </NoteCard>
            </HereYouAreContainer>
        </section>
    );
});

export const GetCreativeTrailerSectionSPANISH = memo((props) => {
    const theme = useTheme();

    return (
        <section id="trailer" style={{ textAlign: "center", margin: "40px 0" }}>
            <QuestionsContainer>
                <SunIcon />
                <SunIcon />

                <HeaderHola>
                    <h2>¿Es esto posible?</h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>
                        ¿Organizador, inspirador y ahorrador de tiempo, todo en
                        uno?
                    </h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>¿Dirigido especialmente a los profesores de inglés?</h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>Already fully in English?</h2>
                </HeaderHola>
            </QuestionsContainer>

            <HeaderContainer>
                <HeaderHola uppercase>
                    <h2>
                        yess!!!
                        <br />
                        ¡Aquí está!
                    </h2>
                </HeaderHola>

                <img src={FireworksIcon} alt="firworks icon" />
                <img src={FireworksIcon} alt="firworks icon" />
            </HeaderContainer>

            <HereYouAreContainer>
                <Logo>
                    <img src={GCEDLogotypePNG} alt="Get creative every day" />
                    <HeaderHola color={theme.colors.dark_grey}>
                        <h2>School Year 2021/2022</h2>
                    </HeaderHola>
                </Logo>

                <NoteCard>
                    <HeaderHola uppercase>
                        <h2>
                            Proporcionamos creatividad a los profesores todos
                            los días
                        </h2>
                    </HeaderHola>
                    <ClipIcon />
                </NoteCard>
            </HereYouAreContainer>
        </section>
    );
});

const GetCreativeTrailerSection = memo((props) => {
    const theme = useTheme();

    return (
        <section id="trailer" style={{ textAlign: "center", margin: "40px 0" }}>
            <QuestionsContainer>
                <SunIcon />
                <SunIcon />

                <HeaderHola>
                    <h2>Is it really possible?</h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>
                        An organiser, your lesson wizard and time-saver all in
                        one?
                    </h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>
                        Dedicated to the teachers of English (English taught as
                        a foreign language)?
                    </h2>
                </HeaderHola>
                <HeaderHola>
                    <h2>More of a tool than just a planner?</h2>
                </HeaderHola>
            </QuestionsContainer>

            <HeaderContainer>
                <HeaderHola uppercase>
                    <h2>
                        yess!!!
                        <br />
                        here you are
                    </h2>
                </HeaderHola>

                <img src={FireworksIcon} alt="firworks icon" />
                <img src={FireworksIcon} alt="firworks icon" />
            </HeaderContainer>

            <HereYouAreContainer>
                <Logo>
                    <img src={GCEDLogotypePNG} alt="Get creative every day" />
                    <HeaderHola color={theme.colors.dark_grey}>
                        <h2>School Year 2021/2022</h2>
                    </HeaderHola>
                </Logo>

                <NoteCard>
                    <HeaderHola uppercase>
                        <h2>Your everyday boost of creativity in teaching!</h2>
                    </HeaderHola>
                    <ClipIcon />
                </NoteCard>
            </HereYouAreContainer>
        </section>
    );
});

export default GetCreativeTrailerSection;
