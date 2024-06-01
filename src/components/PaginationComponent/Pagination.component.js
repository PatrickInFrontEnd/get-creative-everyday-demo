import React from "react";
import styled from "styled-components";
import { flexCenter, flexColumn } from "./../mixins";
import { useTranslation } from "react-i18next";

const PaginationContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: -150px;
    ${flexCenter};
    justify-content: flex-end;
    align-items: flex-end;

    @media screen and (max-width: 1560px) {
        right: unset;
        left: -270px;
        bottom: 20px;
    }

    @media screen and (max-width: 1340px) {
        left: unset;
        right: 0;
        bottom: -100px;
    }

    @media screen and (max-width: 680px) {
        justify-content: center;
    }

    @media screen and (max-width: 560px) {
        bottom: -80px;
    }
`;

export const HeaderBig = styled.h2`
    font-size: 12.8rem;
    font-family: ${({ theme }) => theme.ff.Montserrat};
    line-height: 95%;
    margin-right: 25px;

    @media screen and (max-width: 1560px) {
        font-size: 8rem;
    }
`;

const HeaderSmall = styled.h5`
    font-size: 5.4rem;
    font-family: ${({ theme }) => theme.ff.Montserrat};
    color: ${({ theme }) => theme.colors.grey};

    @media screen and (max-width: 1560px) {
        font-size: 3.6rem;
    }
`;

const PaginationComponent = ({ actualNumber, length }) => {
    const { t } = useTranslation();

    return (
        <PaginationContainer>
            <HeaderBig>
                {actualNumber < 10 ? `0${actualNumber}` : actualNumber}
            </HeaderBig>
            <HeaderSmall>
                {t("atoms.from")} {length}
            </HeaderSmall>
        </PaginationContainer>
    );
};
export default PaginationComponent;
