import React from "react";
import styled from "styled-components";

const AuthorComponent = (props) => (
    <Container>
        <LeftBox>
            <Photo src={} alt="" />
            <AuthorLink href={link}>
                <Icon />
                <p>{link}</p>
            </AuthorLink>
        </LeftBox>

        <RightBox></RightBox>
    </Container>
);

export default AuthorComponent;
