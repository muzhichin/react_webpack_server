import React from 'react';

import './Main.scss';


/**
 * Обёртка для основной области (на всякий случай)
 *
 * @param children Внутренние элементы
 * @return {JSX.Element}
 * @constructor
 */
const Main = ({children}) => (
    <main>
        {children}
    </main>
);

export default Main;