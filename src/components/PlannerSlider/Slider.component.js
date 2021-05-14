import React from "react";
import styled from "styled-components";
import { flexCenter, flexColumn } from "./../mixins";
import { HeaderHola } from "../atoms/Header";
import one from "./../../assets/img/planner_bowel/1.png";
import PaginationComponent from "./../PaginationComponent/Pagination.component";
import ProgressBar from "./../ProgressBar/ProgressBar.component";
import { ReactComponent as NavigationArrow } from "./../../assets/svg/slider_icon.svg";

const Container = styled.div`
    position: relative;
    width: 100%;
    margin: 30px auto 80px;
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
`;

const ContentBox = styled.div`
    position: relative;
    width: 70%;
    max-width: 1100px;
    min-height: 600px;
    ${flexCenter};
    ${flexColumn};
    padding: 30px;
    margin: 30px 10% 30px auto;
    background-color: ${({ theme }) => theme.colors.yellow};

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
    }
`;

const Title = styled.div`
    max-width: 50%;
    text-align: center;
`;

const Description = styled.p`
    max-width: 50%;
    margin-top: 20px;
    text-align: center;
`;

const Photo = styled.img`
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
    }
`;

const SliderComponent = (props) => (
    <Container>
        <ContentBox>
            <Title>
                <HeaderHola uppercase>
                    <h3>teaching hacks - tips useful in your everyday work</h3>
                </HeaderHola>
            </Title>
            <Description>
                Planner with 13 months of monthly and weekly pages from August
                2021 to August 2022
            </Description>

            <Photo src={one} alt="planner" />
            <ProgressBar progress={`30%`} />
        </ContentBox>
        <NavigationArrow />
        <NavigationArrow />
    </Container>
);
export default SliderComponent;
