import { createContext } from "react";


// TODO: 1. Crear el context
export const FiltersContext = createContext()

// TODO: 2. Crear el provided context
export function FiltersProvider({ children } = {}) {
  return (
    <FiltersContext.Provider value={{
      category: 'all',
      minPrice: 0
    }}>
      {children}
    </FiltersContext.Provider>
  )
}