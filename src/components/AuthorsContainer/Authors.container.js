import React from "react";
import styled from "styled-components";
import { flexColumn } from "../mixins";
import Author from "./../AuthorComponent/Author.component";
import { authorsENG } from "./../../data/eng";
import { authorsSPANISH } from "./../../data/esp";
import { authorsPL } from "./../../data/pl";

const Container = styled.div`
    ${flexColumn};
    width: 100%;
    padding: 40px 30px 0;

    @media screen and (max-width: 560px) {
        padding: 20px 10px;
    }
`;

export const AuthorsContainerPL = (props) => {
    const authorComponents = authorsPL.map((author, i) => (
        <Author
            key={i}
            author={author.author}
            links={author.links}
            photo={author.photo}
        />
    ));

    return <Container>{authorComponents}</Container>;
};

export const AuthorsContainerSPANISH = (props) => {
    const authorComponents = authorsSPANISH.map((author, i) => (
        <Author
            key={i}
            author={author.author}
            links={author.links}
            photo={author.photo}
        />
    ));

    return <Container>{authorComponents}</Container>;
};

const AuthorsContainer = (props) => {
    const authorComponents = authorsENG.map((author, i) => (
        <Author
            key={i}
            author={author.author}
            links={author.links}
            photo={author.photo}
        />
    ));

    return <Container>{authorComponents}</Container>;
};
export default AuthorsContainer;
