import React from "react";
import styled from "styled-components";
import { flexCenter } from "./../mixins";

const TilesSection = styled.div`
    ${flexCenter};
    flex-wrap: wrap;
    width: 100%;
    padding: 0 60px;
    margin: 250px auto 0;
    z-index: 2;

    @media screen and (max-width: 500px) {
        padding: 0 40px;
    }
`;

const TilesContainer = (props) => <TilesSection>{props.children}</TilesSection>;

export default TilesContainer;
