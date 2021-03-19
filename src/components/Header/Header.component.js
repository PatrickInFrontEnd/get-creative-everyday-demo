import React from "react";
import styled, { useTheme } from "styled-components";
import Title from "./../atoms/Title/Title.component";

const Header = styled.h5`
    margin: 30px auto;
    max-width: 1000px;
    text-align: center;

    @media screen and (max-width: 1100px) {
        & {
            padding: 0 50px;
        }
    }

    @media screen and (max-width: 800px) {
        & {
            font-size: ${({ theme }) => theme.fz.S};
        }
    }

    @media screen and (max-width: 560px) {
        & {
            font-size: ${({ theme }) => theme.fz.XS};
        }
    }
`;

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

const HeaderComponent = (props) => {
    const theme = useTheme();

    return (
        <>
            <Title>wkrótce premiera</Title>
            <SubHeader>
                Kalendarz i planner dla nauczycieli języka angielskiego uczących
                młodsze dzieci
            </SubHeader>
            <Title margin="0 auto" small>
                Dowiedz się więcej!
            </Title>
        </>
    );
};

export default HeaderComponent;
