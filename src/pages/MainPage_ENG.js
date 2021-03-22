import React from "react";
import { HeaderComponentENG } from "../components/Header/Header.component";
import { FormComponentENG } from "./../components/Form/Form.component";
import Flower from "../components/Flower/Flower.component";
import { TilesContainerENG } from "./../components/Tiles Container/Tiles.container";
import BookComponent from "../components/Book/Book.component";

const MainPageContainerENG = (props) => (
    <>
        <section id="main">
            <HeaderComponentENG />
            <TilesContainerENG />
            <FormComponentENG />
            <Flower />
            <BookComponent />
        </section>
    </>
);

export default MainPageContainerENG;
