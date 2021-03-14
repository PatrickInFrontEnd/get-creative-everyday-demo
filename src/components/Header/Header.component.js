import React from "react";
import styled from "styled-components";

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

const SubHeader = styled.h6`
    font-size: ${({ theme }) => theme.fz.XS};
    margin: 50px auto;
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

const HeaderComponent = (props) => (
    <>
        <Header>
            Kalendarz i planner dla nauczycieli języka angielskiego uczących
            młodsze dzieci. Zapewniamy nauczycielską kreatywność każdego dnia!
        </Header>
        <SubHeader>
            JEŚLI CHCESZ NARESZCIE MIEĆ PLANNER IDEALNY DLA CIEBIE,
            <br />
            ZAPISZ SIĘ NA LISTĘ ZAINTERESOWANYCH I DOWIEDZ SIĘ WIĘCEJ!
        </SubHeader>
    </>
);

export default HeaderComponent;
