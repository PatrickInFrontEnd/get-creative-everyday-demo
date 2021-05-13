import React from "react";
import styled from "styled-components";

const PaginationComponent = ({ currentIndex, length }) => (
    <PaginationContainer>
        <HeaderBig>
            {currentIndex < 10 ? `0${currentIndex}` : currentIndex}
        </HeaderBig>
        <HeaderSmall>from {length}</HeaderSmall>
    </PaginationContainer>
);
export default PaginationComponent;
