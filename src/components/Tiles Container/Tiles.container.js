import React from "react";
import styled from "styled-components";
import { flexCenter } from "./../mixins";
import Tile, {
    TileIconContainer,
    TitleContainer,
} from "./../atoms/Tile/Tile.component";
import { boxesENG } from "./../../data/eng";
import { boxesSPANISH } from "./../../data/esp";
import { boxesPL } from "./../../data/pl";

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

export const TilesContainerPL = (props) => {
    const tileComponents = boxesPL.map(
        ({ header, description, icon: IconComponent }, i) => (
            <Tile key={i}>
                <TitleContainer key={`title-container${i}`}>
                    <TileIconContainer key={`tile-icon-container${i}`}>
                        {<IconComponent key={`icon${i}`} />}
                    </TileIconContainer>
                    <h4 key={`header-title${i}`}>{header}</h4>
                </TitleContainer>
                <p key={`description${i}`}>{description}</p>
            </Tile>
        )
    );

    return <TilesSection id="niezbednik">{tileComponents}</TilesSection>;
};

export const TilesContainerSPANISH = (props) => {
    const tileComponents = boxesSPANISH.map(
        ({ header, description, icon: IconComponent }, i) => (
            <Tile key={i}>
                <TitleContainer key={`title-container${i}`}>
                    <TileIconContainer key={`tile-icon-container${i}`}>
                        {<IconComponent key={`icon${i}`} />}
                    </TileIconContainer>
                    <h4 key={`header-title${i}`}>{header}</h4>
                </TitleContainer>
                <p key={`description${i}`}>{description}</p>
            </Tile>
        )
    );

    return <TilesSection id="niezbednik">{tileComponents}</TilesSection>;
};

export const TilesContainerENG = (props) => {
    const tileComponents = boxesENG.map(
        ({ header, description, icon: IconComponent }, i) => (
            <Tile key={i}>
                <TitleContainer key={`title-container${i}`}>
                    <TileIconContainer key={`tile-icon-container${i}`}>
                        {<IconComponent key={`icon${i}`} />}
                    </TileIconContainer>
                    <h4 key={`header-title${i}`}>{header}</h4>
                </TitleContainer>
                <p key={`description${i}`}>{description}</p>
            </Tile>
        )
    );

    return <TilesSection id="kit">{tileComponents}</TilesSection>;
};
