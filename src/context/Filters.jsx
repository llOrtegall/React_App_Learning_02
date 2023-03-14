import { createContext, useState } from "react";


// TODO: 1. Crear el context
export const FiltersContext = createContext()

// TODO: 2. Crear el provided context
export function FiltersProvider({ children } = {}) {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
    }}>
      {children}
    </FiltersContext.Provider>
  )
}