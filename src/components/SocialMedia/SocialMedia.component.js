import React from "react";
import styled, { css } from "styled-components";
import { size_100x100, flexCenter } from "./../mixins";
import { ReactComponent as FbIcon } from "./../../assets/svg/icon_facebook.svg";
import { ReactComponent as InstagramIcon } from "./../../assets/svg/icon_instagram.svg";
import { ReactComponent as WWWIcon } from "./../../assets/svg/icon_www.svg";
import GCPNG from "./../../assets/img/gc.png";
import GCLogoPNG from "./../../assets/img/gclogo.png";
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
    & > a {
        border-radius: 50%;
    }

    & > img {
        ${size_100x100};

        object-fit: cover;
        object-position: center center;
    }
    & > a {
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
`;

const Container = styled.div`
    ${flexCenter};
`;

const SocialMediaComponent = ({ children, linkUrl, imgSrc }) => {
    return (
        <SocialContainer href={linkUrl} target="_blank" rel="noreferrer">
            <img src={imgSrc} alt="Social media" />
            <a href={linkUrl} target="_blank" rel="noreferrer">
                {children}
            </a>
        </SocialContainer>
    );
};

export const SocialMediasComponent = (props) => (
    <Container>
        <SocialMediaComponent
            linkUrl="https://www.facebook.com/magazynGetCreative/"
            imgSrc={GCPNG}
        >
            <FbIcon />
        </SocialMediaComponent>

        <SocialMediaComponent
            linkUrl="https://www.instagram.com/czasopismo_getcreative/"
            imgSrc={GCLogoPNG}
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
