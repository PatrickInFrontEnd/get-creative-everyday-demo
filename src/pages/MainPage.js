import React from "react";
import Header from "../components/Header/Header.component";
import Form from "./../components/Form/Form.component";
import Flower from "../components/Flower/Flower.component";
import TilesSection from "./../components/Tiles Container/Tiles.container";
import BookComponent from "../components/Book/Book.component";

const MainPageContainer = (props) => (
    <>
        <section id="glowna">
            <Header />
            <TilesSection />
            <Form />
            <Flower />
            <BookComponent />
        </section>
    </>
);

export default MainPageContainer;
