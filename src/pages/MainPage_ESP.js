import React from "react";
import { HeaderSectionSPANISH } from "./../sections/HeaderSection";
import { GetCreativeTrailerSectionSPANISH } from "./../sections/GCtrailerSection";
import { SituationsSectionSPANISH } from "./../sections/SituationsSection";
import { PlannerSectionSPANISH } from "./../sections/PlannerSection";
import { NewsletterSectionSPANISH } from "./../sections/NewsletterSection";
import { AuthorsSectionSPANISH } from "./../sections/AuthorsSection";
import { BuyPlannerSectionSPANISH } from "./../sections/BuyPlannerSection";
import { HeaderNormal } from "./../components/atoms/Header";

const MainPageContainer = (props) => (
    <>
        <section id="glowna">
            <HeaderSectionSPANISH />
            <GetCreativeTrailerSectionSPANISH />
            <SituationsSectionSPANISH />
            <PlannerSectionSPANISH />
            <AuthorsSectionSPANISH />
            <BuyPlannerSectionSPANISH />
            <NewsletterSectionSPANISH />
        </section>
    </>
);

export default MainPageContainer;
