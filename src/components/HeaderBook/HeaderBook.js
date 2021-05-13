import React from "react";
import BookPNG from "./../../assets/img/GCED_mockup.png";
import { size_100x100 } from "../mixins";
import styled from "styled-components";

const BookMockup = styled.img`
    display: block;
    ${size_100x100};
    max-width: 400px;
    object-fit: contain;
    object-position: center;
    margin-right: 50px;

    @media screen and (max-width: 1000px) {
        max-width: 350px;
    }

    @media screen and (max-width: 640px) {
        max-height: 450px;
        margin-right: 0;
        margin-bottom: 30px;
        width: 80%;
    }
`;

const BookComponent = (props) => (
    <BookMockup src={BookPNG} alt="Mockup of the planner" />
);

export default BookComponent;
