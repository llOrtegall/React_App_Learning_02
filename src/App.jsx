import { useState } from "react";
import { Products } from "./components/Products";
import { products as inicialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOMENT } from "./config";
import { useFilters } from "./hooks/useFilters";


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