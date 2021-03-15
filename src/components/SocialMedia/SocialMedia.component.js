import React from "react";
import styled, { css } from "styled-components";
import { size_100x100, flexCenter } from "./../mixins";

function setSizeOfSocialContainer(size) {
    switch (size) {
        case "big": {
            return css`
                width: 200px;
                height: 200px;
            `;
        }
        case "medium": {
            return css`
                width: 180px;
                height: 180px;
            `;
        }
        default: {
            return css`
                width: 150px;
                height: 150px;
            `;
        }
    }
}

function setSizeOfSocialLink(size) {
    switch (size) {
        case "big": {
            return css`
                width: 90px;
                height: 90px;
            `;
        }
        case "medium": {
            return css`
                width: 80px;
                height: 80px;
            `;
        }
        default: {
            return css`
                width: 70px;
                height: 70px;
            `;
        }
    }
}

export const SocialContainer = styled.div`
    /* DEV RWD*/
    /* display: none; */
    /* DEV RWD*/
    position: absolute;
    ${({ typeofsize }) => setSizeOfSocialContainer(typeofsize)};
    border-radius: 50%;
    animation: floating 3s infinite;

    &:nth-of-type(3) {
        top: 100px;
        left: 80%;
        animation-delay: 0.5s;

        & > img {
            padding: 0 10px;
            background: ${({ theme }) => theme.colors.light_white};
            background-blend-mode: multiply;
            object-fit: contain;
        }

        a {
            left: -10px;
        }
    }

    &:nth-of-type(4) {
        top: 350px;
        left: 75%;
        animation-delay: 1.5s;

        a {
            padding: 7%;
            right: -10px;
        }
    }

    &:nth-of-type(2) {
        top: 150px;
        left: 150px;
        animation-delay: 1s;
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
        left: unset;
        right: unset;
        ${flexCenter};
        ${({ linkposition }) =>
            linkposition === "left"
                ? css`
                      left: -10px;
                  `
                : css`
                      right: -10px;
                  `};

        ${({ typeofsize }) => setSizeOfSocialLink(typeofsize)};
        background-color: ${({ theme }) => theme.colors.grey};
        padding: 6%;

        svg {
            ${size_100x100};
        }
    }

    @media screen and (max-width: 1740px) {
        &:nth-of-type(3) {
            left: 85%;
        }
        &:nth-of-type(4) {
            left: 80%;
        }
        &:nth-of-type(2) {
            top: 20%;
            left: 200px;
        }
    }

    @media screen and (max-width: 1550px) {
        &:nth-of-type(3) {
            top: 25%;
            width: 120px;
            height: 120px;

            & > a {
                width: 60px;
                height: 60px;
            }
        }
        &:nth-of-type(4) {
            top: 55%;
            width: 100px;
            height: 100px;

            & > a {
                width: 50px;
                height: 50px;
            }
        }
        &:nth-of-type(2) {
            top: 60%;
            width: 110px;
            height: 110px;

            & > a {
                width: 50px;
                height: 50px;
            }
        }
    }

    @media screen and (max-width: 1220px) {
        display: none;
    }
`;

const SocialMediaComponent = ({
    children,
    containerSize,
    LinkSize,
    linkPosition,
    linkUrl,
    imgSrc,
    /* position, */
}) => {
    return (
        <SocialContainer typeOfSize={containerSize} /* position={position} */>
            <img src={imgSrc} alt="Social media" />
            <a
                typeofsize={LinkSize}
                linkposition={linkPosition}
                href={linkUrl}
                target="_blank"
                rel="noreferrer"
            >
                {children}
            </a>
        </SocialContainer>
    );
};

export default SocialMediaComponent;
