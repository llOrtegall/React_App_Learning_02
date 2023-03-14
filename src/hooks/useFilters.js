import { useContext } from "react";
import { FiltersContext } from "../context/Filters.jsx";

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(products => {
      return (
        products.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          products.category === filters.category
        )
      )
    })
  }
  return { filterProducts, setFilters, filters }
}