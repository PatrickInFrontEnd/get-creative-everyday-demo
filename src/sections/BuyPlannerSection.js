import React, { memo } from "react";
import styled from "styled-components";
import { flexCenter } from "./../components/mixins";
import GCED_BuyPNG from "./../assets/img/GCED_flat_mockup.png";
import { ReactComponent as EmoteIcon } from "./../assets/svg/emote.svg";

const BuyPlannerSection = styled.div`
    position: relative;
    ${flexCenter};
    width: 500px;
    margin: 0 auto 30px;
    padding: 0 0 40px;

    img {
        width: 450px;
        object-fit: contain;
    }

    svg {
        position: absolute;
        width: 80px;
        height: 80px;

        &:nth-of-type(1) {
            top: 20%;
            left: -100px;
        }
        &:nth-of-type(2) {
            top: 60%;
            right: -100px;
            transform: rotate(30deg);
        }
    }

    @media screen and (max-width: 800px) {
        width: 70%;

        img {
            width: 100%;
        }

        svg {
            &:nth-of-type(1) {
                top: -2%;
                left: 0;
            }
            &:nth-of-type(2) {
                right: -2%;
            }
        }
    }

    @media screen and (max-width: 540px) {
        width: 90%;

        img {
            max-height: 400px;
        }

        svg {
            width: 50px;
            height: 50px;
        }
    }
`;

export const BuyNowButton = styled.a`
    ${flexCenter};
    overflow: hidden;
    position: absolute;
    bottom: -2%;
    right: -25%;
    transform: translate(-50%, -50%);
    padding: 15px 60px 7.5px;
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.ff.HolaB};
    font-size: ${({ theme }) => theme.fz.hola.medium};
    line-height: 100%;
    text-transform: uppercase;
    border: 4px solid;
    transition: 0.3s;

    &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
        z-index: -1;
        content: "";
        transition: 0.3s;
        width: 101%;
        height: 101%;
        background-color: ${({ theme }) => theme.colors.black};
    }

    &:hover {
        border: 4px solid ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
    }

    &:hover::before {
        transform: translateY(0);
    }

    @media screen and (max-width: 540px) {
        padding: 10px 40px 5px;
        min-width: 175px;
        font-size: ${({ theme }) => theme.fz.hola.small};
        bottom: unset;
        top: 0px;
        right: 50%;
        transform: translate(60%, 0);
    }
`;

export const BuyPlannerSectionPL = memo((props) => (
    <BuyPlannerSection id="kup">
        <img src={GCED_BuyPNG} alt="Planner" />
        <BuyNowButton
            id="buy"
            href="https://sklep.semantika.pl/get-creative-every-day"
            target="_blank"
        >
            KUP TERAZ
        </BuyNowButton>
        <EmoteIcon />
        <EmoteIcon />
    </BuyPlannerSection>
));

export const BuyPlannerSectionSPANISH = memo((props) => (
    <BuyPlannerSection id="kup">
        <img src={GCED_BuyPNG} alt="Planner" />
        <BuyNowButton
            id="buy"
            href="https://shop.getcreative-everyday.com/collection/frontpage/get-creative-every-day"
            target="_blank"
        >
            COMPRA AHORA
        </BuyNowButton>
        <EmoteIcon />
        <EmoteIcon />
    </BuyPlannerSection>
));

const BuyPlannerSectionENG = memo((props) => (
    <BuyPlannerSection id="kup">
        <img src={GCED_BuyPNG} alt="Planner" />
        <BuyNowButton
            id="buy"
            href="https://shop.getcreative-everyday.com/collection/frontpage/get-creative-every-day"
            target="_blank"
        >
            BUY NOW
        </BuyNowButton>
        <EmoteIcon />
        <EmoteIcon />
    </BuyPlannerSection>
));

export default BuyPlannerSectionENG;
