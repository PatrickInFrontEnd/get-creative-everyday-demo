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
    position: absolute;
    top: unset;
    left: unset;
    ${({ position }) =>
        position
            ? css`
                  top: ${position.top || "150px"};
                  left: ${position.left || "100px"};
              `
            : ""};
    ${({ typeofsize }) => setSizeOfSocialContainer(typeofsize)};
    border-radius: 50%;
    animation: floating 3s infinite;

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
        background-color: ${({ theme }) => theme.colors.darker_blue};
        padding: 6%;

        svg {
            ${size_100x100};
        }
    }
`;

const SocialMediaComponent = ({
    children,
    containerSize,
    LinkSize,
    linkPosition,
    linkUrl,
    imgSrc,
    position,
}) => (
    <SocialContainer typeOfSize={containerSize} position={position}>
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

export default SocialMediaComponent;
