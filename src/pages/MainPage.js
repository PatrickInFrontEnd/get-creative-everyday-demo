import React from "react";
import { HeaderSectionPL } from "./../sections/HeaderSection";
import { GetCreativeTrailerSectionPL } from "./../sections/GCtrailerSection";
import { SituationsSectionPL } from "./../sections/SituationsSection";
import { PlannerSectionPL } from "./../sections/PlannerSection";
import { NewsletterSectionPL } from "./../sections/NewsletterSection";
import { AuthorsSectionPL } from "./../sections/AuthorsSection";
import { BuyPlannerSectionPL } from "./../sections/BuyPlannerSection";
import { HeaderNormal } from "./../components/atoms/Header";

const MainPageContainer = (props) => (
    <>
        <section id="glowna">
            <HeaderNormal>
                <h1>
                    <b>Koniec przedsprzedaży - 11.06.2021</b>
                </h1>
            </HeaderNormal>
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
