import React from 'react';
import {NavLink} from 'react-router-dom';
import {useSidebarToggleActionsContext} from "../../SidebarToggleContext";

/**
 * Обёртка для пункта меню
 *
 * @param onClick
 * @param link
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const MenuItemLayout = ({onClick, link, children}) => {
    // Берем из контекста управление сайдбаром
    // Будет нужно для скрытия его при клике на пункт меню на планшетах
    const setSidebarOpen = useSidebarToggleActionsContext();

    // Выводим кнопку, если элемент содержит дочерние
    if (!link || typeof link !== 'string') {
        return (
            <button
                className="button-toggle__wrapper"
                onClick={onClick}>
                <span className="button-toggle">{children}</span>
            </button>
        );
    }

    // Выводим ссылку, если элемент конечный (- без дочерних)
    return (
        <NavLink className="link"
                 activeClassName="active"
                 exact // awesome
                 to={link}
                 onClick={() => setSidebarOpen(false)}
        >
            {children}
        </NavLink>
    );
};

export default MenuItemLayout;