import { useContext, useState } from "react";
import { Products } from "./components/Products";
import { products as inicialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOMENT } from "./config";
import { FiltersContext } from "./context/Filters";

function useFilters() {
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

export const App = () => {
  const [products] = useState(inicialProducts)
  const { filters, filterProducts, setFilters } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOMENT && <Footer filters={filters} />}
    </>
  )
}