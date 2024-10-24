import React, { useContext, createContext, useState } from 'react'

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [refresh, setRefresh] = useState(30);
    const [interval, setInterval] = useState(300);
    const [viewFilter, setViewFilter] = useState('today');
    return (
        <FilterContext.Provider value={{ refresh, setRefresh, interval, setInterval, viewFilter, setViewFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);