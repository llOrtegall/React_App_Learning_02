import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="bg-red-100">
      <ul className="flex justify-around font-semibold py-2">
        <li>
          <NavLink to="/" className='text-xl'>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className='text-xl'>About</NavLink>
        </li>
        <li>
          <NavLink to="/blog" className='text-xl'>Blog</NavLink>
        </li>
      </ul>
    </nav>
  )
}