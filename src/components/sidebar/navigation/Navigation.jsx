import React from 'react';
import MenuItem from "./menuItem/MenuItem";

import './Navigation.scss';


/**
 * Блок с навигацией
 *
 * @param {Object[]} navigation Массив объектов меню
 * @return {JSX.Element} Блоки меню с дочерними элементами
 * @constructor
 */
const Navigation = ({ navigation }) => {

    return (
        <nav className="menu">
            <ul className="menu-list">
                {navigation.map((item, index) => (
                    <MenuItem {...item} key={index} />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;