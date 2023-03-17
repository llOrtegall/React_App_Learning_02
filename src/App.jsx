import { Products } from "./components/Products";
import { products as inicialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";


export const App = () => {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(inicialProducts)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOMENT && <Footer />}
    </>
  )
}