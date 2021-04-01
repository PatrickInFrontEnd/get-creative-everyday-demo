import React from "react";
import { HeaderSectionPL } from "./../sections/HeaderSection";
import { GetCreativeTrailerSectionPL } from "./../sections/GCtrailerSection";
import { SituationsSectionPL } from "./../sections/SituationsSection";
import { PlannerSectionPL } from "./../sections/PlannerSection";
import { NewsletterSectionPL } from "./../sections/NewsletterSection";

const MainPageContainer = (props) => (
    <>
        <section id="glowna">
            <HeaderSectionPL />
            <GetCreativeTrailerSectionPL />
            <SituationsSectionPL />
            <PlannerSectionPL />
            <NewsletterSectionPL />
        </section>
    </>
);

export default MainPageContainer;
