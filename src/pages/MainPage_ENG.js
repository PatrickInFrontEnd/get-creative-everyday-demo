import React from "react";
import HeaderSection from "./../sections/HeaderSection";
import GCtrailerSection from "./../sections/GCtrailerSection";
import SituationsSection from "./../sections/SituationsSection";
import PlannerSection from "./../sections/PlannerSection";
import NewsletterSection from "../sections/NewsletterSection";
import AuthorsSection from "./../sections/AuthorsSection";

const MainPageContainerENG = (props) => (
    <section id="main">
        <HeaderSection />
        <GCtrailerSection />
        <SituationsSection />
        <PlannerSection />
        <NewsletterSection />
        <AuthorsSection />
    </section>
);

export default MainPageContainerENG;
