import React, { useContext, createContext, useState } from 'react'

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [startDateFilter, setStartDateFilter] = useState();
    const [endDateFilter, setEndDateFilter] = useState();
    const [viewFilter, setViewFilter] = useState('Yesterday');
    const [deviceFilter, setDeviceFilter] = useState('00:1A:2B:3C:4D:5E')
    return (
        <FilterContext.Provider value={{ startDateFilter, endDateFilter, setEndDateFilter, setStartDateFilter, deviceFilter, setDeviceFilter,viewFilter, setViewFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);