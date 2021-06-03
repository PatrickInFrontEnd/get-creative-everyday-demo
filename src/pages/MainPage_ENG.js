import React from "react";
import HeaderSection from "./../sections/HeaderSection";
import GCtrailerSection from "./../sections/GCtrailerSection";
import SituationsSection from "./../sections/SituationsSection";
import PlannerSection from "./../sections/PlannerSection";
import NewsletterSection from "../sections/NewsletterSection";
import AuthorsSection from "./../sections/AuthorsSection";
import BuyPlannerSection from "./../sections/BuyPlannerSection";
import { HeaderNormal } from "./../components/atoms/Header";

const MainPageContainerENG = (props) => (
    <section id="main">
        <HeaderNormal>
            <h1>
                <b>The end of pre-sale: 11th June 2021</b>
            </h1>
        </HeaderNormal>
        <HeaderSection />
        <GCtrailerSection />
        <SituationsSection />
        <PlannerSection />
        <AuthorsSection />
        <BuyPlannerSection />
        <NewsletterSection />
    </section>
);

export default MainPageContainerENG;
