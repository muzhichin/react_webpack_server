import React from 'react';
import classNames from 'classnames';
import Sidebar from "./sidebar/Sidebar";
import SidebarToggleContextProvider, {useSidebarToggleContext} from "./sidebar/SidebarToggleContext";

import './App.scss';

/**
 * Обёртка ПУ
 * @param {Object[]} navigation Пункты в меню
 * @param {JSX.Element} children Внутренние элементы
 * @return {JSX.Element}
 * @constructor
 */
const App = ({navigation, children}) => {
    // Берем из контекста значение открытости сайдбара
    const isSidebarOpen = useSidebarToggleContext();

    return (
        <div className="app">
            <div className={classNames('wrapper', {'sidebar_collapsed': isSidebarOpen})}>
                <Sidebar navigation={navigation}/>
                <Sidebar navigation={navigation}/>
                <div className="container">
                    {children}
                </div>
            </div>
        </div>
    );
};

// Обёртка для доступности контекста из компонента App (который выше)
const withSidebarToggle = (Component) => (props) => (
    <SidebarToggleContextProvider>
        <Component {...props} />
    </SidebarToggleContextProvider>
);

export default withSidebarToggle(App);