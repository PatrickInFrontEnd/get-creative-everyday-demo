import React, { memo } from "react";
import HeaderBook from "./../components/HeaderBook/HeaderBook";
import { HeaderNormal } from "./../components/atoms/Header";
import styled from "styled-components";
import { flexCenter, size_100x100 } from "../components/mixins";
import {
    TilesContainerPL,
    TilesContainerENG,
} from "./../components/Tiles Container/Tiles.container";

const Container = styled.div`
    width: 100%;
    height: 600px;
    ${flexCenter};
    padding: 0 30px;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 640px) {
        height: auto;
    }
`;

const TitleContainer = styled.div`
    ${flexCenter};
    ${size_100x100};
    max-width: 800px;
`;

export const HeaderSectionPL = memo((props) => (
    <>
        <Container>
            <HeaderBook />
            <TitleContainer>
                <HeaderNormal>
                    <h1 className="bigger-line header">
                        <b>Kalendarz i planner</b> z gotowymi pomysłami na
                        zajęcia z języka angielskiego
                        <br />
                        <b>dla młodszych dzieci</b>
                    </h1>
                </HeaderNormal>
            </TitleContainer>
        </Container>
        <TilesContainerPL />
    </>
));

const HeaderSection = memo((props) => (
    <>
        <Container>
            <HeaderBook />
            <TitleContainer>
                <HeaderNormal>
                    <h1 className="bigger-line header">
                        <b>Both a calendar and planner</b> including
                        ready-to-use ideas for English lessons with
                        <br />
                        <b>young learners</b>
                    </h1>
                </HeaderNormal>
            </TitleContainer>
        </Container>
        <TilesContainerENG />
    </>
));

export default HeaderSection;
