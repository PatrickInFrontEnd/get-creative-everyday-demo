import React from "react";
import { HeaderSectionPL } from "./../sections/HeaderSection";
import { GetCreativeTrailerSectionPL } from "./../sections/GCtrailerSection";
import { SituationsSectionPL } from "./../sections/SituationsSection";
import { PlannerSectionPL } from "./../sections/PlannerSection";

const MainPageContainer = (props) => (
    <>
        <section id="glowna">
            <HeaderSectionPL />
            <GetCreativeTrailerSectionPL />
            <SituationsSectionPL />
            <PlannerSectionPL />
        </section>
    </>
);

export default MainPageContainer;
