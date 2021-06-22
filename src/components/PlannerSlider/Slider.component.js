import React, { useContext, useEffect, useRef, useState, memo } from "react";
import styled from "styled-components";
import { flexCenter, flexColumn } from "./../mixins";
import { HeaderHola } from "../atoms/Header";
import PaginationComponent from "./../PaginationComponent/Pagination.component";
import ProgressBar from "./../ProgressBar/ProgressBar.component";
import { ReactComponent as NavigationArrow } from "./../../assets/svg/slider_icon.svg";
import { sliderContext } from "./../../providers/sliderProvider";
import { animateSlider } from "./../../utils/animations/slider.animation";

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 30px auto 150px;
    padding: 20px;

    svg {
        position: absolute;
        top: 50%;
        transition: 0.3s;
        cursor: pointer;

        &:nth-of-type(1) {
            left: 60px;
            transform: scale(0.7);

            &:hover {
                animation: animateLeft 1s infinite;
            }
        }
        &:nth-of-type(2) {
            right: 60px;
            transform: scale(0.7) rotateY(180deg);

            &:hover {
                animation: animateRight 1s infinite;
            }
        }

        @keyframes animateLeft {
            0% {
                transform: scale(0.7);
            }
            50% {
                transform: scale(0.9);
            }
            100% {
                transform: scale(0.7);
            }
        }

        @keyframes animateRight {
            0% {
                transform: scale(0.7) rotateY(180deg);
            }
            50% {
                transform: scale(0.9) rotateY(180deg);
            }
            100% {
                transform: scale(0.7) rotateY(180deg);
            }
        }
    }

    @media screen and (max-width: 1340px) {
        margin: 100px auto 100px;
    }

    @media screen and (max-width: 1150px) {
        svg {
            &:nth-of-type(1) {
                left: 20px;
                transform: scale(0.5);
            }
            &:nth-of-type(2) {
                right: 20px;
                transform: scale(0.5) rotateY(180deg);
            }
        }
    }

    @media screen and (max-width: 560px) {
        padding: 20px 0;

        svg {
            &:nth-of-type(1) {
                left: 0px;
            }
            &:nth-of-type(2) {
                right: 0px;
            }

            @keyframes animateLeft {
                0% {
                    transform: scale(0.5);
                }
                50% {
                    transform: scale(0.6);
                }
                100% {
                    transform: scale(0.5);
                }
            }

            @keyframes animateRight {
                0% {
                    transform: scale(0.5) rotateY(180deg);
                }
                50% {
                    transform: scale(0.6) rotateY(180deg);
                }
                100% {
                    transform: scale(0.5) rotateY(180deg);
                }
            }
        }
    }
`;

export const ContentBox = styled.div`
    position: relative;
    width: 70%;
    max-width: 1100px;
    min-height: 600px;
    ${flexCenter};
    ${flexColumn};
    padding: 30px;
    margin: 30px 10% 30px auto;
    background-color: ${({ theme }) => theme.colors.yellow};

    ul {
        li {
            font-size: ${({ theme }) => theme.fz.S};
            margin: 10px 0 10px 100px;
        }
    }

    @media screen and (max-width: 1840px) {
        margin: 30px 5% 30px auto;
    }

    @media screen and (max-width: 1560px) {
        min-height: 500px;
        max-width: 900px;
        margin: 30px 10% 30px auto;
    }

    @media screen and (max-width: 1400px) {
        margin: 30px 5% 30px auto;
    }

    @media screen and (max-width: 1340px) {
        margin: 30px auto;
        width: 90%;
        padding-top: 150px;
    }

    @media screen and (max-width: 560px) {
        padding-top: 180px;
        min-height: 450px;

        ul {
            li {
                font-size: ${({ theme }) => theme.fz.XS};
                margin: 10px 0 10px 50px;
            }
        }
    }

    @media screen and (max-width: 360px) {
        padding-top: 150px;
    }
`;

export const Title = styled.div`
    max-width: 50%;
    text-align: center;

    @media screen and (max-width: 900px) {
        max-width: 80%;
    }

    @media screen and (max-width: 560px) {
        max-width: 100%;
    }
`;

const Description = styled.p`
    max-width: 50%;
    margin-top: 20px;
    text-align: center;

    @media screen and (max-width: 900px) {
        max-width: 80%;
    }

    @media screen and (max-width: 560px) {
        max-width: 100%;
    }
`;

export const DescriptionContainer = styled.div`
    ${flexCenter};

    ul {
        max-width: 80%;

        @media screen and (max-width: 900px) {
            max-width: 80%;
        }

        @media screen and (max-width: 560px) {
            max-width: 100%;
        }
    }
`;

export const Photo = styled.img`
    position: absolute;
    top: 50%;
    left: -10%;
    transform: translate(-50%, -50%);
    width: 50vw;
    max-width: 700px;
    object-fit: contain;

    @media screen and (max-width: 1700px) {
        max-width: 600px;
        left: -5%;
    }

    @media screen and (max-width: 1560px) {
        max-width: 500px;
        top: 40%;
    }

    @media screen and (max-width: 1340px) {
        left: 50%;
        top: 10%;
        max-width: 400px;
    }
    @media screen and (max-width: 560px) {
        width: 70vw;
    }

    @media screen and (max-width: 560px) {
        width: 85vw;
    }
`;

const SliderComponent = (props) => {
    const {
        currentSlide,
        currentIndex,
        length,
        nextSlide,
        prevSlide,
        allowChange,
        prohibitChange,
        allowedToChangeSlide,
    } = useContext(sliderContext);

    const [autoPlay, setAutoPlay] = useState(true);
    const autoPlayRef = useRef();

    const containerRef = useRef();

    const convertToProgress = (currentIndex, lengthValue) =>
        `${(currentIndex / lengthValue).toFixed(2) * 100}%`;

    const handleNextSlideClick = () => handleChangeSlide(nextSlide);

    const handlePrevSlideClick = () => handleChangeSlide(prevSlide);

    const handleChangeSlide = (cb) => {
        if (allowedToChangeSlide) {
            prohibitChange();
            animateSlider(containerRef, cb, allowChange);
        }
    };

    useEffect(() => {
        autoPlayRef.current = handleNextSlideClick;
    });

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        };

        if (autoPlay) {
            const interval = setInterval(play, 6000);
            return () => clearInterval(interval);
        }
    }, [autoPlay]);

    return (
        <Container
            ref={containerRef}
            onMouseLeave={() => {
                setAutoPlay(true);
            }}
        >
            <ContentBox>
                <Title>
                    <HeaderHola uppercase>
                        <h3>{currentSlide.title}</h3>
                    </HeaderHola>
                </Title>
                <DescriptionContainer>
                    {currentSlide.description ? (
                        <Description>{currentSlide.description}</Description>
                    ) : (
                        currentSlide.list && (
                            <ul>
                                {currentSlide.list.map(({ item }, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )
                    )}
                </DescriptionContainer>
                <Photo src={currentSlide.photo} alt="planner" />
                <ProgressBar
                    progress={convertToProgress(currentIndex + 1, length)}
                />
                <PaginationComponent
                    actualNumber={currentIndex + 1}
                    length={length}
                />
            </ContentBox>
            <NavigationArrow
                direction="left"
                onClick={() => {
                    setAutoPlay(false);
                    handlePrevSlideClick();
                }}
            />
            <NavigationArrow
                direction="right"
                onClick={() => {
                    setAutoPlay(false);
                    handleNextSlideClick();
                }}
            />
        </Container>
    );
};

export default SliderComponent;
