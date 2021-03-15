import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./layout";
import MainPage from "./pages/MainPage";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </Layout>
    );
}

export default App;
