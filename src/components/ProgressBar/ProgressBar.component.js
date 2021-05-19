import React from "react";
import styled, { css } from "styled-components";

const ProgressContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(100%);
    width: 100%;
    height: 8px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.grey};
`;

const ProgressBar = styled.span`
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    transition: 0.3s 0.4s;

    ${({ completion }) =>
        completion
            ? css`
                  transform: translateX(calc(-100% + ${completion}));
              `
            : css`
                  transform: translateX(0);
              `}
`;

const ProgressBarComponent = ({ progress = `10%` }) => (
    <ProgressContainer>
        <ProgressBar completion={progress} />
    </ProgressContainer>
);

export default ProgressBarComponent;
