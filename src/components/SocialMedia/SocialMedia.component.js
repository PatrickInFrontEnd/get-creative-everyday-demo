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
    ${({ typeOfSize }) => setSizeOfSocialContainer(typeOfSize)};
    border-radius: 50%;

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
        ${({ linkPosition }) =>
            linkPosition === "left"
                ? css`
                      left: -10px;
                  `
                : css`
                      right: -10px;
                  `};

        ${({ typeOfSize }) => setSizeOfSocialLink(typeOfSize)};
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
            typeOfSize={LinkSize}
            linkPosition={linkPosition}
            href={linkUrl}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    </SocialContainer>
);

export default SocialMediaComponent;
