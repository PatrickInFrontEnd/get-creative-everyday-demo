import React from "react";
import styled, { css } from "styled-components";
import { size_100x100, flexCenter } from "./../mixins";
import { ReactComponent as FbIcon } from "./../../assets/svg/icon_facebook.svg";
import { ReactComponent as InstagramIcon } from "./../../assets/svg/icon_instagram.svg";
import { ReactComponent as WWWIcon } from "./../../assets/svg/icon_www.svg";
import GCPNG_FB from "./../../assets/img/gc.png";
import GCPNG_ENG_FB from "./../../assets/img/gcedengFB.png";
import GC_PNG_INSTAGRAM from "./../../assets/img/gclogo.png";
import GC_PNG_INSTAGRAM_ENG from "./../../assets/img/gcedengINST.png";
import GcWWWPNG from "./../../assets/img/gcwww.png";

export const SocialContainer = styled.a`
    position: relative;
    top: 20px;
    ${flexCenter};
    width: 90px;
    height: 90px;
    margin: 0 20px;
    border-radius: 50%;
    animation: floating 3s infinite;

    &:nth-of-type(1) {
        animation-delay: 1s;
    }

    &:nth-of-type(2) {
        animation-delay: 0.5s;

        & > img {
            padding: 0 10px;
            background: ${({ theme }) => theme.colors.light_white};
            background-blend-mode: multiply;
            object-fit: contain;
        }
    }

    &:nth-of-type(3) {
        animation-delay: 1.5s;

        a {
            padding: 7%;
        }
    }

    @keyframes floating {
        0% {
            transform: translateY(0);
        }

        25% {
            transform: translateY(-10px);
        }

        50% {
            transform: translateY(10px);
        }

        100% {
            transform: translateY(0);
        }
    }

    & > img,
    & > div {
        border-radius: 50%;
    }

    & > img {
        ${size_100x100};

        object-fit: cover;
        object-position: center center;
    }
    & > div {
        position: absolute;
        bottom: -5%;
        left: -10px;
        ${flexCenter};
        width: 40px;
        height: 40px;
        background-color: ${({ theme }) => theme.colors.light_white};
        padding: 6%;

        svg {
            ${size_100x100};
        }
    }

    @media screen and (max-width: 1450px) {
        & {
            width: 70px;
            height: 70px;

            & > div {
                bottom: -15%;
                left: -10px;

                svg {
                    ${size_100x100};
                }
            }
        }
    }

    @media screen and (max-width: 480px) {
        top: -25px;
    }

    @media screen and (max-width: 420px) {
        width: 60px;
        height: 60px;
    }
`;

const Container = styled.div`
    ${flexCenter};

    @media screen and (max-width: 1350px) {
        & {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: ${({ theme }) => theme.colors.white};
            transition: 0.5s;
            transform: translateX(-150%);

            ${({ isActive }) =>
                isActive
                    ? css`
                          transform: translateX(0);
                      `
                    : ""}
        }
    }

    @media screen and (max-width: 480px) {
        padding: 30px 0;
        bottom: -335px;
    }

    @media screen and (max-width: 420px) {
        bottom: -325px;
    }
`;

const SocialMediaComponent = ({ children, linkUrl, imgSrc }) => {
    return (
        <SocialContainer href={linkUrl} target="_blank" rel="noreferrer">
            <img src={imgSrc} alt="Social media" />
            <div>{children}</div>
        </SocialContainer>
    );
};

export const SocialMediasComponentPL = ({ isActive }) => (
    <Container isActive={isActive}>
        <SocialMediaComponent
            linkUrl="https://www.facebook.com/magazynGetCreative/"
            imgSrc={GCPNG_FB}
        >
            <FbIcon />
        </SocialMediaComponent>

        <SocialMediaComponent
            linkUrl="https://www.instagram.com/czasopismo_getcreative/"
            imgSrc={GC_PNG_INSTAGRAM}
        >
            <InstagramIcon />
        </SocialMediaComponent>

        <SocialMediaComponent
            linkUrl="https://www.getcreative.edu.pl/"
            imgSrc={GcWWWPNG}
        >
            <WWWIcon />
        </SocialMediaComponent>
    </Container>
);

export const SocialMediasComponentENG = ({ isActive }) => (
    <Container isActive={isActive}>
        <SocialMediaComponent
            linkUrl="https://www.facebook.com/GetCreativeEveryday"
            imgSrc={GCPNG_ENG_FB}
        >
            <FbIcon />
        </SocialMediaComponent>

        <SocialMediaComponent
            linkUrl="https://www.instagram.com/get_creative_everyday/"
            imgSrc={GC_PNG_INSTAGRAM_ENG}
        >
            <InstagramIcon />
        </SocialMediaComponent>

        <SocialMediaComponent
            linkUrl="https://www.getcreative.edu.pl/"
            imgSrc={GcWWWPNG}
        >
            <WWWIcon />
        </SocialMediaComponent>
    </Container>
);

export default SocialMediaComponent;
