import React from 'react';
import App from "../components/App";
import { Route, Switch } from "react-router-dom";
import Main from "../components/main/Main";
import Header from "../components/header/Header";

const AppJs = () => {
    return (
        <App navigation={[]}>
            <Header/>
            <Main>
                <Switch>
                    <Route exact path="/"/>
                </Switch>
            </Main>
        </App>
    );
};

export default AppJs;