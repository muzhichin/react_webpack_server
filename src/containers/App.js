import React from 'react';
import App from "../components/App";
import { Route, Switch } from "react-router-dom";
import Main from "../containers/Main";
import Header from "../components/header/Header";

const account = [
    {
        name: 'Аккаунт',
        icon: null,
        items: [
            {
                name: 'Профиль',
                link: '/profile',
                icon: null
            },
            {
                name: 'Финансы',
                link: '/finance',
                icon: null
            },
            {
                name: 'Услуги',
                link: '/services',
                icon: null
            },
        ]
    }]

const AppJs = () => {
    return (
        <App navigation={account}>
            <Header/>
            <Main>
                <Switch>
                    <Route exact path="/" component={Main}/>
                </Switch>
            </Main>
        </App>
    );
};

export default AppJs;