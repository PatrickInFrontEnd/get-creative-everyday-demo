import React from "react";
import styled from "styled-components";
import { HeaderNormal } from "./../atoms/Header";
import { flexCenter, flexColumn } from "./../mixins";
import GetCreative_LOGO from "./../../assets/img/get_logo.png";
import { useTranslation, Trans } from "react-i18next";

const CircleContainer = styled.div`
    ${flexCenter};
    ${flexColumn};
    position: relative;
    width: 700px;
    height: 700px;
    margin: 40px auto;
    padding: 40px;
    border: 8px solid ${({ theme }) => theme.colors.black};
    border-radius: 50%;

    &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: -16px;
        left: 50%;
        transform: translateX(-50%);
        border: 4px solid ${({ theme }) => theme.colors.yellow};
        border-radius: 50%;
    }

    p {
        width: 75%;
        max-width: 450px;
        text-align: center;
        font-size: ${({ theme }) => theme.fz.M};
        margin-bottom: 60px;
    }

    h2 {
        font-size: ${({ theme }) => theme.fz.XL};
    }

    a.logo {
        ${flexCenter};
        margin: 80px auto 0;

        img {
            width: 70%;
        }
    }

    @media screen and (max-width: 1100px) {
        border: none;
        width: 80%;
        height: auto;

        &::before {
            display: none;
        }

        p {
            font-size: ${({ theme }) => theme.fz.S};
            width: 90%;
        }

        h2 {
            font-size: ${({ theme }) => theme.fz.M};
        }

        img {
            max-width: 450px;
        }
    }

    @media screen and (max-width: 650px) {
        padding: 20px;
        margin: 0 auto;

        span::before {
            display: none;
        }

        p {
            width: 100%;
            min-width: 300px;
        }

        a.logo {
            margin-top: 30px;
        }
    }
`;

const AuthorsCircleContainer = (props) => {
    const { t, i18n } = useTranslation();

    return (
        <CircleContainer>
            <p>
                <Trans
                    i18n={i18n}
                    i18nKey="atoms.authorsCircle.content"
                    components={{ b: <b /> }}
                />
            </p>
            <HeaderNormal>
                <h2 className="bold">
                    <a
                        href="https://www.getcreative.edu.pl/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span>{t("atoms.authorsCircle.span")}</span>
                    </a>
                </h2>
            </HeaderNormal>

            <a
                href="https://www.getcreative.edu.pl/"
                target="_blank"
                rel="noreferrer noopener"
                className="logo"
            >
                <img src={GetCreative_LOGO} alt="Logo Get Creative Edu" />
            </a>
        </CircleContainer>
    );
};

export default AuthorsCircleContainer;
