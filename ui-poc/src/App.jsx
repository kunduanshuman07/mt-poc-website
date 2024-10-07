import React from 'react'
import UserLayout from "./layouts/UserLayout"
import { FilterProvider } from "./context/FilterProvider"
import { LoadingProvider } from './context/LoadingProvider'

const App = () => {
  return (
    <FilterProvider>
      <LoadingProvider>
        <UserLayout />
      </LoadingProvider>
    </FilterProvider>
  )
}

export default App