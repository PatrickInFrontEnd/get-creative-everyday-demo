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
            <HeaderNormal>
                <h1>
                    <b>Fin de la preventa - 11.06.2021</b>
                </h1>
            </HeaderNormal>
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
