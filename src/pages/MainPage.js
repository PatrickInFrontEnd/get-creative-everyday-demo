import React from "react";
import HeaderSection from "../sections/HeaderSection";
import TrailerSection from "../sections/GCtrailerSection";
import SituationsSection from "../sections/SituationsSection";
import PlannerSection from "../sections/PlannerSection";
import AuthorsSection from "../sections/AuthorsSection";
import BuyPlannerSection from "../sections/BuyPlannerSection";
import NewsletterSection from "../sections/NewsletterSection";
import LanguageChanger from "../components/LanguageChanger/LanguageChanger.component";
import { Route, useRouteMatch, Switch } from "react-router-dom";

const MainPageContainer = (props) => {
    const { path } = useRouteMatch();

    return (
        <>
            <section id="glowna">
                <HeaderSection />
                <TrailerSection />
                <SituationsSection />
                <PlannerSection />
                <AuthorsSection />
                <BuyPlannerSection />
                <NewsletterSection />
            </section>
            <Switch>
                <Route path={`${path}:language`} component={LanguageChanger} />
            </Switch>
        </>
    );
};

export default MainPageContainer;
