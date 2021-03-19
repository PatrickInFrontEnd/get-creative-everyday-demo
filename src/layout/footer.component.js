import React from "react";
import styled from "styled-components";
import SemantikaPNG from "./../assets/img/semantika_logo.png";
import { flexCenter, flexColumn } from "../components/mixins";

const Footer = styled.footer`
    width: 100%;
    padding: 50px 150px;
    ${flexCenter};
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.dark_white};

    @media screen and (max-width: 1220px) {
        padding: 50px 80px;
    }

    @media screen and (max-width: 1020px) {
        flex-direction: column;
        padding: 40px;
    }
`;

const DescriptionBlock = styled.div`
    min-height: 240px;
    max-width: 300px;
    ${flexColumn};
    align-items: flex-start;
    align-self: center;

    p {
        font-size: ${({ theme }) => theme.fz.XXS};
        margin: 5px 0;
    }

    a {
        text-decoration: underline;
        font-size: ${({ theme }) => theme.fz.XXS};
    }

    h6 {
        margin: 0 0 20px 0;
        font-weight: ${({ theme }) => theme.fw.semiBold};
    }

    i {
        margin-right: 10px;
    }

    &:nth-of-type(1) {
        img {
            width: 100%;
            margin-bottom: 30px;
        }
    }

    &:nth-of-type(3) {
        a {
            margin: 5px 0;
        }
    }

    @media screen and (max-width: 1020px) {
        margin: 40px auto;
        min-height: unset;
        max-width: unset;
        ${flexCenter};

        p {
            min-width: 190px;
            text-align: left;
        }

        &:nth-of-type(2) {
            a {
                min-width: 190px;
                text-align: left;
            }
        }
    }
`;

const Header = styled.h5`
    position: relative;
    left: 22.5px;
    font-weight: ${({ theme }) => theme.fw.medium};
    margin: 0 0 30px 0;

    &::before {
        position: absolute;
        top: 50%;
        left: -15px;
        transform: translate(-50%, -50%);
        content: "";
        width: 15px;
        height: 4px;
        background-color: ${({ theme }) => theme.colors.yellow};
    }

    @media screen and (max-width: 1020px) {
        left: unset;
    }
`;

const CopyRight = styled.footer`
    width: 100%;
    min-height: 40px;
    padding: 15px 0;
    ${flexCenter};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.grey};

    p {
        text-align: center;
        font-size: ${({ theme }) => theme.fz.XXXS};
        padding: 0 40px;
    }
`;

const FooterComponent = (props) => (
    <>
        <Footer id="kontakt">
            <DescriptionBlock>
                <img src={SemantikaPNG} alt="Logo Gw Semantika" />
                <p>ul. Żuławska 10, 60-412 Poznań</p>
                <p>KRS: 0000470869,</p>
                <p>Sąd Rejonowy w Poznaniu</p>
                <p>IX Wydział Gospodarczy KRS</p>
                <p>NIP: 7773232650, REGON: 302483298</p>
            </DescriptionBlock>

            <DescriptionBlock>
                <Header>Kontakt</Header>
                <h6>Masz pytania? Napisz do nas!</h6>
                <p>
                    <i className="fas fa-envelope"></i>
                    biuro@semantika.pl
                </p>
                <p>
                    <i className="fas fa-phone-square-alt"></i>
                    +48 61 847 11 34
                </p>
                <a href="#lol" target="_blank">
                    <i className="fas fa-globe-europe"></i>
                    www.semantika.pl
                </a>
            </DescriptionBlock>

            <DescriptionBlock>
                <Header>Linki</Header>
                <a
                    href="https://www.facebook.com/magazynGetCreative/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-facebook-f"></i>
                    Facebook
                </a>

                <a
                    href="https://www.instagram.com/czasopismo_getcreative/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fab fa-instagram"></i>
                    Instagram
                </a>

                <a
                    href={`${process.env.PUBLIC_URL}/documents/polityka_ikon.txt`}
                    download
                >
                    Prawa autorskie ikon
                </a>
            </DescriptionBlock>
        </Footer>
        <CopyRight>
            <p>Copyright ©2021 Grupa Wydawnicza Semantika Sp. z o.o.</p>
        </CopyRight>
    </>
);
export default FooterComponent;
