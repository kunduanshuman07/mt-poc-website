import React, { useContext, createContext, useState } from 'react'

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
    const [middleLoading, setMiddleLoading] = useState(true);
    const [bottomLoading, setBottomLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{ middleLoading, bottomLoading, setMiddleLoading, setBottomLoading }}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext);