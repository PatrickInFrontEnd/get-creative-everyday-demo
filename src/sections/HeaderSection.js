import React, { memo } from "react";
import styled, { useTheme } from "styled-components";
import HeaderBook from "./../components/HeaderBook/HeaderBook";
import { HeaderNormal } from "./../components/atoms/Header";
import { flexCenter, size_100x100 } from "../components/mixins";
import TilesContainer from "./../components/Tiles Container/Tiles.container";
import { Trans, useTranslation } from "react-i18next";

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

export const HeaderSection = (props) => {
    const { i18n } = useTranslation();

    return (
        <>
            <Container>
                <HeaderBook />
                <TitleContainer>
                    <HeaderNormal>
                        <h1 className="bigger-line header">
                            <Trans
                                i18n={i18n}
                                i18nKey="atoms.header"
                                components={{ b: <b />, br: <br /> }}
                            />
                        </h1>
                    </HeaderNormal>
                </TitleContainer>
            </Container>
            <TilesContainer />
        </>
    );
};

export default HeaderSection;
