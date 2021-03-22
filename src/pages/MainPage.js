import React from "react";
import { HeaderComponentPL } from "../components/Header/Header.component";
import { FormComponentPL } from "./../components/Form/Form.component";
import Flower from "../components/Flower/Flower.component";
import { TilesContainerPL } from "./../components/Tiles Container/Tiles.container";
import BookComponent from "../components/Book/Book.component";

const MainPageContainer = (props) => (
    <>
        <section id="glowna">
            <HeaderComponentPL />
            <TilesContainerPL />
            <FormComponentPL />
            <Flower />
            <BookComponent />
        </section>
    </>
);

export default MainPageContainer;
