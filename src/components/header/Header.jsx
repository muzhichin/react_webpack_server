import React from 'react';
import burger from "public/images/burger.svg";
import {useSidebarToggleActionsContext, useSidebarToggleContext} from "../sidebar/SidebarToggleContext";

import './Header.scss';


/**
 * Шапка ПУ
 *
 * @param children Элементы шапки
 * @return {JSX.Element}
 * @constructor
 */
const Header = ({children}) => {
    // Получаем управление открытием/скрытием сайдбара из контекста
    const [isSidebarOpen, setSidebarOpen] = [useSidebarToggleContext(), useSidebarToggleActionsContext()];

    return (
        <header className="header">
            <button className="sidebar-toggler" onClick={() => setSidebarOpen(!isSidebarOpen)}
                    aria-label="Переключатель меню">
                <img src={burger} alt="menu"/>
            </button>
            <div className="control-items">
                {children}
            </div>
        </header>
    );
};

export default Header;