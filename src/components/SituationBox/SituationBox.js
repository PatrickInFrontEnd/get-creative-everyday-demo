import React from "react";
import styled, { css } from "styled-components";
import { flexCenter } from "../mixins";

const SituationContainer = styled.div`
    position: relative;
    padding: 40px;
    margin: 50px 30px;
    max-width: 720px;
    min-width: 600px;
    border-radius: 15px;
    background-color: transparent;
    border: 4px solid ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.ff.Montserrat};
    text-align: center;

    &::before {
        content: "SITUATION:";
        position: absolute;
        ${flexCenter};
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: ${({ theme }) => theme.ff.HolaB};
        font-size: ${({ theme }) => theme.fz.hola.small};
        letter-spacing: 4px;
        width: 190px;
        height: 50px;
        border-radius: 15px;
        background-color: ${({ theme }) => theme.colors.yellow};
    }

    ${({ inverted, theme }) =>
        inverted
            ? ""
            : css`
                  &::after {
                      content: "";
                      z-index: -1;
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-49.5%, -49%);
                      display: block;
                      width: 100%;
                      height: 100%;
                      border-radius: 15px;
                      border: 8px solid ${theme.colors.yellow};
                  }
              `}

    @media screen and (max-width:850px) {
        & {
            max-width: unset;
            min-width: unset;
            width: 100%;

            h4 {
                font-size: ${({ theme }) => theme.fz.S};
            }
            p {
                font-size: ${({ theme }) => theme.fz.XS};
            }
        }

        &::before {
            font-size: ${({ theme }) => theme.fz.hola.mini};
            letter-spacing: 3px;
            width: 170px;
            height: 50px;
        }
    }

    @media screen and (max-width: 470px) {
        padding: 40px 20px;
    }
`;

const Header = styled.div`
    margin-top: 15px;
    font-weight: ${({ theme }) => theme.fw.bold};
`;

const Separator = styled.span`
    position: relative;
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.black};
    margin: 40px 0;

    ${({ inverted }) =>
        inverted
            ? css`
                  &::before {
                      content: "";
                      position: absolute;
                      top: 50%;
                      left: 0;
                      transform: translate(4px, -45%);
                      z-index: -1;
                      display: block;
                      width: 100%;
                      height: 8px;
                      background-color: ${({ theme }) => theme.colors.yellow};
                  }
              `
            : ""}
`;

const Description = styled.div`
    font-weight: ${({ theme }) => theme.fw.light};
`;

const SituationBox = ({ header, description, inverted = false }) => (
    <SituationContainer inverted={inverted}>
        <Header>
            <h4>{header}</h4>
        </Header>
        <Separator inverted={inverted}></Separator>
        <Description>
            <p>{description}</p>
        </Description>
    </SituationContainer>
);
export default SituationBox;
