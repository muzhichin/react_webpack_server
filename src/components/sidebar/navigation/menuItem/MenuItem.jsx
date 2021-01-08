import React, { useEffect, useState } from 'react';
import { matchPath, useLocation } from "react-router";
import MenuItemLayout from "./MenuItemLayout";

import './MenuItem.scss';


/**
 * Элемент меню
 * @param {string} name Заголовок пункта меню
 * @param {string} link Ссылка
 * @param {JSX.Element} icon Иконка
 * @param {Object[]} items Дочерние элементы
 * @return {JSX.Element} Пункт в меню
 * @constructor
 */
const MenuItem = ({ name, link, icon, items = [] }) => {
    const isExpandable = items && items.length > 0;
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);

    const location = useLocation();

    useEffect(() => {

        // Если дочерняя ссылка = URL => открываем родительский пункт в меню
        if (isExpandable) {

            const openMenuItem = (array) => {
                for (let i = 0; i < array.length; i++) {
                    // Проверяем совпадения URL со свойством link
                    let match = matchPath(array[i].link, {
                        path: location.pathname,
                        exact: false,
                        strict: true
                    })

                    if (match) {
                        setOpen(true);
                        break;
                    }
                    // Если есть дочерние элементы - идём внутрь
                    if (array[i].items) openMenuItem(array.items);
                }
            }

            openMenuItem(items);

        }
    }, []);

    // Дочерний элемент (рекурсивно вызывает этот компонент)
    const MenuItemChildren = isExpandable && open ? (
        <ul className="submenu-list">
            {items.map((item, index) => (
                <MenuItem {...item} key={index} />
            ))}
        </ul>
    ) : null;

    // Корневой элемент (родительский)
    const MenuItemRoot = (
        <li className="menu-list__item">
            <MenuItemLayout name={name} link={link} onClick={handleClick}>
                <i>{icon}</i> {name}
            </MenuItemLayout>
            {MenuItemChildren}
        </li>
    );

    return (
        <>
            {MenuItemRoot}
        </>
    );
};

export default MenuItem;