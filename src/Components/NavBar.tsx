import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-red-100">
      <ul className="flex justify-around font-semibold py-2">
        <li>
          <NavLink to="/" className='text-xl'>Home</NavLink>
        </li>
      </ul>
    </nav>
  )
}