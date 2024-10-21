import React, { useContext, createContext, useState } from 'react'

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [pulseLoading, setPulseLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{ pulseLoading, setPulseLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export const usePulseLoading = () => useContext(LoadingContext);