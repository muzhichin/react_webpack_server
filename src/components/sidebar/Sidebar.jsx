import React from 'react';
import { Link } from "react-router-dom";

import Navigation from "./navigation/Navigation";
import logotype from "public/images/example.png";

import './Sidebar.scss'

/**
 * Сайдбар
 *
 * @param {Object[]} navigation Массив объектов меню
 * @return {JSX.Element}
 * @constructor
 */
const Sidebar = ({ navigation }) => {
    return (
        <aside className="sidebar">
            <div className="logotype">
                <Link to="/">
                    <img src={logotype} alt="" />
                </Link>
            </div>
            <Navigation navigation={navigation} />
        </aside>
    )
}

export default Sidebar;