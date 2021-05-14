import React from "react";
import styled from "styled-components";
import { flexCenter, flexColumn } from "./../mixins";

const PaginationContainer = styled.div`
    position: absolute;
    bottom: -150px;
    left: -400px;
    ${flexCenter};
    align-items: flex-end;
`;

const HeaderBig = styled.h2`
    font-size: 12.8rem;
    font-family: ${({ theme }) => theme.ff.Montserrat};
    line-height: 95%;
    margin-right: 25px;
`;

const HeaderSmall = styled.h5`
    font-size: 5.4rem;
    font-family: ${({ theme }) => theme.ff.Montserrat};
    color: ${({ theme }) => theme.colors.grey};
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
