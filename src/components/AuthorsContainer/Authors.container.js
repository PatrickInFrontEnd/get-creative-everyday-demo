import React from "react";
import styled from "styled-components";
import { flexColumn, flexCenter } from "../mixins";
import Author from "./../AuthorComponent/Author.component";

const Container = styled.div`
    ${flexColumn};
    width: 100%;
    padding: 40px 30px;
`;

const AuthorsContainer = (props) => (
    <Container>
        <Author />
    </Container>
);
export default AuthorsContainer;
