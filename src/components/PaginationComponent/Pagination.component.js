import React from "react";
import styled from "styled-components";
import { flexCenter, flexColumn } from "./../mixins";

const PaginationContainer = styled.div`
    ${flexCenter};
    justify-content: flex-end;
    align-items: flex-end;
    margin: 20px 180px 20px auto;

    @media screen and (max-width: 680px) {
        margin: 20px auto;
        justify-content: center;
    }
`;

export const HeaderBig = styled.h2`
    font-size: 12.8rem;
    font-family: ${({ theme }) => theme.ff.Montserrat};
    line-height: 95%;
    margin-right: 25px;

    @media screen and (max-width: 1340px) {
        font-size: 8rem;
    }
`;

const HeaderSmall = styled.h5`
    font-size: 5.4rem;
    font-family: ${({ theme }) => theme.ff.Montserrat};
    color: ${({ theme }) => theme.colors.grey};

    @media screen and (max-width: 1340px) {
        font-size: 3.6rem;
    }
`;

const PaginationComponent = ({ actualNumber, length }) => (
    <PaginationContainer>
        <HeaderBig>
            {actualNumber < 10 ? `0${actualNumber}` : actualNumber}
        </HeaderBig>
        <HeaderSmall>from {length}</HeaderSmall>
    </PaginationContainer>
);
export default PaginationComponent;
