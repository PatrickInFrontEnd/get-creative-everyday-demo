import React from "react";
import styled from "styled-components";
import SemantikaPNG from "./../assets/img/semantika_logo.png";
import { flexCenter, flexColumn } from "../components/mixins";

const Footer = styled.footer`
    margin-top: 50px;
    width: 100%;
    padding: 50px 150px;
    ${flexCenter};
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.darker_blue};
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
        background-color: ${({ theme }) => theme.colors.beige};
    }
`;

const CopyRight = styled.footer`
    width: 100%;
    height: 40px;
    ${flexCenter};
    background-color: #213d49;

    p {
        text-align: center;
        font-size: ${({ theme }) => theme.fz.XXXS};
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
                <a href="#dd" target="_blank">
                    Wersja angielska
                </a>
            </DescriptionBlock>
        </Footer>
        <CopyRight>
            <p>Copyright ©2021 Grupa Wydawnicza Semantika Sp. z o.o.</p>
        </CopyRight>
    </>
);
export default FooterComponent;
