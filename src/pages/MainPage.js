import React from "react";
import { HeaderSectionPL } from "./../sections/HeaderSection";
import { GetCreativeTrailerSectionPL } from "./../sections/GCtrailerSection";
import { SituationsSectionPL } from "./../sections/SituationsSection";
import { PlannerSectionPL } from "./../sections/PlannerSection";
import { NewsletterSectionPL } from "./../sections/NewsletterSection";
import { AuthorsSectionPL } from "./../sections/AuthorsSection";
import { BuyPlannerSectionPL } from "./../sections/BuyPlannerSection";

const MainPageContainer = (props) => (
    <>
        <section id="glowna">
            <HeaderSectionPL />
            <GetCreativeTrailerSectionPL />
            <SituationsSectionPL />
            <PlannerSectionPL />
            <AuthorsSectionPL />
            <BuyPlannerSectionPL />
            <NewsletterSectionPL />
        </section>
    </>
);

export default MainPageContainer;
