import React, { useContext, createContext, useState } from 'react'

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [startDateFilter, setStartDateFilter] = useState();
    const [endDateFilter, setEndDateFilter] = useState();
    const [viewFilter, setViewFilter] = useState('today');
    return (
        <FilterContext.Provider value={{ startDateFilter, endDateFilter, setEndDateFilter, setStartDateFilter, viewFilter, setViewFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);