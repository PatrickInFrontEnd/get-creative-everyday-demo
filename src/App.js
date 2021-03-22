import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout";
import MainPage from "./pages/MainPage";
import MainPageENG from "./pages/MainPage_ENG";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={MainPageENG} />
                <Route path="/pl" exact component={MainPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </Layout>
    );
}

export default App;
