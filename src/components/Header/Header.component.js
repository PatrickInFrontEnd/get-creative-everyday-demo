import React from "react";
import styled from "styled-components";
import Title from "./../atoms/Title/Title.component";

export const SubHeader = styled.h6`
    font-size: ${({ theme }) => theme.fz.XS};
    font-weight: ${({ theme, light }) =>
        light ? theme.fw.regular : theme.fw.semiBold};
    text-transform: uppercase;
    margin: 15px auto;
    padding: 0 20px;
    line-height: 160%;
    max-width: 700px;
    text-align: center;

    @media screen and (max-width: 800px) {
        & {
            font-size: ${({ theme }) => theme.fz.XXS};
        }
    }

    @media screen and (max-width: 560px) {
        & {
            font-size: ${({ theme }) => theme.fz.XXXS};
        }
    }
`;

export const HeaderComponentPL = (props) => (
    <>
        <Title>wkrótce premiera</Title>
        <SubHeader>
            Kalendarz i planner z gotowymi pomysłami na zajęcia z języka
            angielskiego dla młodszych dzieci
        </SubHeader>
        <Title margin="0 auto" small>
            Dowiedz się więcej!
        </Title>
    </>
);

export const HeaderComponentENG = (props) => (
    <>
        <Title>premiere soon</Title>
        <SubHeader>
            Calendar and planner including ready-to-use ideas for English
            lessons with young learners
        </SubHeader>
        <Title margin="0 auto" small>
            Check out for more!
        </Title>
    </>
);
