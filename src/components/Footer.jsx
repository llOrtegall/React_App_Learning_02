import { useFilters } from '../hooks/useFilters';
import { useCart } from "../hooks/useCart";
import './Footer.css';

export function Footer() {

  const { filters } = useFilters();
  const { cart } = useCart()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        JSON.stringify(cart, null, 2)
      }
      {/* <h4>Pruebas Técnica de React</h4>
      <span>@llOrTeGall</span>
      <h5>Shopping Cart Con useContext & useReducer</h5> */}
    </footer>
  )
}