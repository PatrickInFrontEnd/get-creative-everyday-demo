import React from "react";
import styled from "styled-components";
import { flexCenter } from "./../mixins";
import Tile, {
    TileIconContainer,
    TitleContainer,
} from "./../atoms/Tile/Tile.component";
import { ReactComponent as EnglishIcon } from "./../../assets/svg/icon_english.svg";
import { ReactComponent as CalendarIcon } from "./../../assets/svg/icon_calendar.svg";
import { ReactComponent as OrderIcon } from "./../../assets/svg/icon_order.svg";
import { ReactComponent as CreativityIcon } from "./../../assets/svg/icon_creativity.svg";

const TilesSection = styled.div`
    ${flexCenter};
    flex-wrap: wrap;
    width: 100%;
    padding: 0 60px;
    margin: 20px auto;
    z-index: 2;

    @media screen and (max-width: 1850px) {
        max-width: 1000px;
        padding: 0 20px;
    }

    @media screen and (max-width: 1100px) {
        max-width: 500px;
    }

    @media screen and (max-width: 560px) {
        margin: 30px auto 0;
    }

    @media screen and (max-width: 500px) {
        padding: 0 40px;
    }
`;

const TilesContainer = (props) => (
    <TilesSection id="niezbednik">
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <EnglishIcon />
                </TileIconContainer>
                <h4>English</h4>
            </TitleContainer>

            <p>Stworzony po angielsku dla nauczycieli angielskiego</p>
        </Tile>
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <CalendarIcon />
                </TileIconContainer>
                <h4>Cały rok</h4>
            </TitleContainer>

            <p>
                13 miesięcy, od sierpnia do sierpnia &#x28; zgodnie z programami
                w różnych krajach &#41;
            </p>
        </Tile>
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <OrderIcon />
                </TileIconContainer>
                <h4>Organizacja</h4>
            </TitleContainer>

            <p>
                Wszystko w jednym miejscu – kalendarz i planner w pracy
                nauczyciela
            </p>
        </Tile>
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <CreativityIcon />
                </TileIconContainer>
                <h4>Kreatywność</h4>
            </TitleContainer>

            <p>Pomysły na zajęcia językowe na każdy tydzień roku</p>
        </Tile>
    </TilesSection>
);

export default TilesContainer;
