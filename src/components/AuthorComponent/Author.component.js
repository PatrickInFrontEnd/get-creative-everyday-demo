import React from "react";
import styled from "styled-components";
import { flexCenter, flexColumn, marginToChildren } from "./../mixins";

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 1500px;
    padding: 0 40px;
    margin: 20px auto;

    @media screen and (max-width: 1660px) {
        padding: 0 120px;
    }

    @media screen and (max-width: 1260px) {
        ${flexColumn};
        ${flexCenter};
        flex-direction: column-reverse;
        margin: 0 auto 50px;
    }

    @media screen and (max-width: 500px) {
        padding: 0;
    }
`;

const LeftBox = styled.div`
    ${flexColumn};
    justify-content: flex-start;
    align-items: flex-start;
    width: 40%;
    max-width: 500px;

    img {
        width: 100%;
        min-height: 300px;
        max-height: 350px;
        object-fit: cover;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 1260px) {
        width: 60%;
    }

    @media screen and (max-width: 760px) {
        width: 80%;
    }

    @media screen and (max-width: 560px) {
        width: 100%;

        img {
            min-height: 200px;
        }
    }
`;

const AuthorLink = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${({ theme }) => theme.colors.black};
    margin: 0 0 15px;

    svg {
        width: 40px;
        height: 40px;
        fill: ${({ theme }) => theme.colors.black};
        transition: 0.3s;
    }

    p {
        font-size: ${({ theme }) => theme.fz.XXS};
        margin-left: 15px;
        transition: 0.3s;
    }

    &:hover {
        svg {
            fill: ${({ theme }) => theme.colors.yellow};
        }

        p {
            color: ${({ theme }) => theme.colors.yellow};
        }
    }

    @media screen and (max-width: 1370px) {
        p {
            font-size: ${({ theme }) => theme.fz.XXXS};
        }

        svg {
            width: 30px;
            height: 30px;
        }
    }
`;

const RightBox = styled.div`
    ${flexColumn};
    justify-content: flex-start;
    align-items: flex-start;
    width: 60%;
    margin-left: 80px;
    ${marginToChildren("0 0 25px")};

    @media screen and (max-width: 1260px) {
        margin: 0 0 20px;
        width: 80%;
    }

    @media screen and (max-width: 680px) {
        width: 100%;
    }
`;

const AuthorName = styled.h3`
    font-weight: ${({ theme }) => theme.fw.bold};
    font-size: ${({ theme }) => theme.fz.M};

    @media screen and (max-width: 1370px) {
        font-size: ${({ theme }) => theme.fz.S};
    }

    @media screen and (max-width: 1260px) {
        margin: 0 auto 30px;
    }
`;

const AuthorDescription = styled.p`
    font-weight: ${({ theme }) => theme.fw.regular};
    font-size: ${({ theme }) => theme.fz.S};

    @media screen and (max-width: 1370px) {
        font-size: ${({ theme }) => theme.fz.XS};
    }

    @media screen and (max-width: 1260px) {
        text-align: center;
        line-height: 160%;
    }
`;

const HighlightContainer = styled.div`
    ${flexCenter};
    width: 100%;
    min-height: 250px;
    background-color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 30px;

    i {
        font-size: 10rem;
        color: ${({ theme }) => theme.colors.white};
    }
`;

const UserHighlight = (props) => (
    <HighlightContainer>
        <i className="fas fa-user"></i>
    </HighlightContainer>
);

const AuthorComponent = ({ photo, links, author }) => {
    const authorLinks = links.map(({ link, icon: Icon }, i) => (
        <AuthorLink
            href={`https://${link}`}
            target="_blank"
            rel="noreferrer noopener"
            key={i}
        >
            <Icon />
            <p>{link}</p>
        </AuthorLink>
    ));

    return (
        <Container>
            <LeftBox>
                {photo ? (
                    <img src={photo} alt={author.name} />
                ) : (
                    <UserHighlight />
                )}
                {authorLinks}
            </LeftBox>

            <RightBox>
                <AuthorName>{author?.name}</AuthorName>
                <AuthorDescription>{author?.description}</AuthorDescription>
            </RightBox>
        </Container>
    );
};

export default AuthorComponent;
