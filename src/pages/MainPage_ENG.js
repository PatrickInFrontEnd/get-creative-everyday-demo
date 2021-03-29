import React from "react";
import HeaderSection from "./../sections/HeaderSection";
import GCtrailerSection from "./../sections/GCtrailerSection";
import SituationsSection from "./../sections/SituationsSection";
import PlannerSection from "./../sections/PlannerSection";

const MainPageContainerENG = (props) => (
    <section id="main">
        <HeaderSection />
        <GCtrailerSection />
        <SituationsSection />
        <PlannerSection />
    </section>
);

export default MainPageContainerENG;
