import { useId } from "react";
import './Cart.css'
import { AddToCartIcon, CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";

export function Cart() {
  const CartChecBoxId = useId();
  return (
    <>
      <label className="cart-button" htmlFor={CartChecBoxId}>
        <CartIcon />
      </label>
      <input id={CartChecBoxId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          <li>
            <img src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" alt="Iphone" />
            <div>
              <strong>iPhone</strong> - $1499
            </div>
            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}