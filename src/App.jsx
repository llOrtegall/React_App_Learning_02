import { Products } from "./components/Products";
import { products } from "./mocks/products.json";

export const App = () => {
  return (
    <>
      <Products products={products} />
    </>
  )
}