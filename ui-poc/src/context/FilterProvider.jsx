import React, { useContext, createContext, useState } from 'react'

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [startDateFilter, setStartDateFilter] = useState();
    const [endDateFilter, setEndDateFilter] = useState();
    const [areaFilter, setAreaFilter] = useState();
    const [unitFilter, setUnitFilter] = useState();
    const [viewFilter, setViewFilter] = useState();

    return (
        <FilterContext.Provider value={{ startDateFilter, endDateFilter, setEndDateFilter, setStartDateFilter, areaFilter, setAreaFilter, unitFilter, setUnitFilter, viewFilter, setViewFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);