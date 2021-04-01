import React from "react";
import styled, { css } from "styled-components";

const IncludeTitle = styled.h2`
    font-family: ${({ theme }) => theme.ff.HolaB};
    font-weight: ${({ theme }) => theme.fw.regular};
    font-size: ${({ theme }) => theme.fz.hola.medium};
    text-align: center;
    padding: 0 15px;
    margin: 0 0 20px;
    line-height: 120%;
    background-color: ${({ theme }) => theme.colors.yellow};
    border-radius: 15px;

    ${({ inverted }) =>
        inverted
            ? css`
                  background-color: transparent;
                  text-transform: uppercase;
                  padding: 0;
              `
            : ""}

    @media screen and (max-width: 1200px) {
        font-size: ${({ theme }) => theme.fz.hola.small};
    }
`;

const IncludeDescription = styled.p`
    font-family: ${({ theme }) => theme.ff.Montserrat};
    font-weight: ${({ theme }) => theme.fw.light};
    font-size: ${({ theme }) => theme.fz.normal.small};
    color: ${({ theme }) => theme.colors.black};

    ${({ inverted, theme }) =>
        inverted
            ? css`
                  color: ${theme.colors.black};
              `
            : ""}

    margin: 0 0 40px;

    ul li {
        margin: 0 0 10px 40px;
    }

    @media screen and (max-width: 1200px) {
        font-size: ${({ theme }) => theme.fz.S};
    }

    @media screen and (max-width: 570px) {
        text-align: justify;
    }
`;

export const IncludeHeader = ({ header, description, inverted = false }) => (
    <>
        <IncludeTitle inverted={inverted}>{header}</IncludeTitle>
        <IncludeDescription inverted={inverted}>
            {description}
        </IncludeDescription>
    </>
);

export const ListedHeader = ({ header, sublist }) => {
    const items = sublist.map(({ item }, i) => <li key={i}>{item}</li>);

    return (
        <>
            <IncludeTitle>{header}</IncludeTitle>
            <ul>{items}</ul>
        </>
    );
};
