import React, { useState, createContext, useContext } from 'react'

// Создаём контекст
const SidebarToggleContext = createContext();
const SidebarToggleActionsContext = createContext();

// Создаём хук контекста
export const useSidebarToggleContext = () => useContext(SidebarToggleContext);
export const useSidebarToggleActionsContext = () => useContext(SidebarToggleActionsContext);

/**
 * Обёртка провайдера контекста
 *
 * @param children Дочерние элементы
 * @return {JSX.Element}
 * @constructor
 */
const SidebarToggleContextProvider = ({children}) => {
    // Открытие сайдбара на планшетах
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <SidebarToggleContext.Provider value={isSidebarOpen}>
            <SidebarToggleActionsContext.Provider value={setSidebarOpen}>
                {children}
            </SidebarToggleActionsContext.Provider>
        </SidebarToggleContext.Provider>
    );
};

export default SidebarToggleContextProvider;

