import React from 'react'
import UserLayout from "./layouts/UserLayout"
import { FilterProvider } from "./context/FilterProvider"

const App = () => {
  return (
    <FilterProvider>
      <UserLayout />
    </FilterProvider>
  )
}

export default App