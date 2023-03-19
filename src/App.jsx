import { Products } from "./components/Products";
import { products as inicialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOMENT } from "./config";
import { useFilters } from "./hooks/useFilters";
import { Cart } from "./components/Cart";
import { CartProvider } from "./context/Cart";


export const App = () => {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(inicialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOMENT && <Footer />}
    </CartProvider>
  )
}