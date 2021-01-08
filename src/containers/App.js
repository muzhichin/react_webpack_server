import React from 'react';
import App from "../components/App";
import { Route, Switch } from "react-router-dom";
import Main from "../components/main/Main";

const AppJs = () => {
    return (
        <App navigation={[]}>
            <Main>
                <Switch>
                    <Route exact path="/"/>
                </Switch>
            </Main>
        </App>
    );
};

export default AppJs;