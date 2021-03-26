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
    padding: 0 20px;
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

export const TilesContainerPL = (props) => (
    <TilesSection id="niezbednik">
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <EnglishIcon />
                </TileIconContainer>
                <h4>English</h4>
            </TitleContainer>

            <p>
                Stworzony w pełni po angielsku i dedykowany nauczycielom
                angielskiego
            </p>
        </Tile>
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <CalendarIcon />
                </TileIconContainer>
                <h4>Cały rok</h4>
            </TitleContainer>

            <p>
                … a nawet 13 miesięcy, kalendarz od sierpnia 2021 do sierpnia
                2022
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

            <p>
                Pomysły na zajęcia językowe dla przedszkolaków i dzieci
                wczesnoszkolnych
            </p>
        </Tile>
    </TilesSection>
);

export const TilesContainerENG = (props) => (
    <TilesSection id="kit">
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <EnglishIcon />
                </TileIconContainer>
                <h4>Teaching English as a foreign language</h4>
            </TitleContainer>

            <p>Created especially for English teachers of young learners</p>
        </Tile>
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <CalendarIcon />
                </TileIconContainer>
                <h4>School Year 2021/2022</h4>
            </TitleContainer>

            <p>
                … or actually even more! August 2021 – August 2022 planner with
                13 months of monthly and weekly pages.
            </p>
        </Tile>
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <OrderIcon />
                </TileIconContainer>
                <h4>Organiser</h4>
            </TitleContainer>

            <p>All in one – calendar and teacher’s planner</p>
        </Tile>
        <Tile>
            <TitleContainer>
                <TileIconContainer>
                    <CreativityIcon />
                </TileIconContainer>
                <h4>Boost of creativity</h4>
            </TitleContainer>

            <p>
                Content pages with ideas for English lessons in preschool and
                early school education
            </p>
        </Tile>
    </TilesSection>
);
