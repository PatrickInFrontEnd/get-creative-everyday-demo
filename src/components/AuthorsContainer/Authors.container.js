import React from "react";
import styled from "styled-components";
import { flexColumn } from "../mixins";
import Author from "./../AuthorComponent/Author.component";
import { useTranslation } from "react-i18next";

const Container = styled.div`
    ${flexColumn};
    width: 100%;
    padding: 40px 30px 0;

    @media screen and (max-width: 560px) {
        padding: 20px 10px;
    }
`;

const AuthorsContainer = (props) => {
    const { t } = useTranslation();

    const authorsResources = t("authorsDescriptions", { returnObjects: true });

    const authorComponents = authorsResources.map((author, i) => (
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
