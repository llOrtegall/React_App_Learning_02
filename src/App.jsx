import { useState } from "react";
import { Products } from "./components/Products";
import { products as inicialProducts } from "./mocks/products.json";

export const App = () => {
  const [products] = useState(inicialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filtersProducts = (products) => {
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

  return (
    <>
      <Products products={filtersProducts(products)} />
    </>
  )
}