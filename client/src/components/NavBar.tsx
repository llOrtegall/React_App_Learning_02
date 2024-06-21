import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return(
    <nav className="flex justify-around py-2 border-b-2">
      <figure>
        <img src="gane.webp" width={100} alt="logo gane" />
      </figure>
      <ul className="flex items-center gap-4 dark:text-white font-semibold text-xl">
        <li>
          <NavLink to="/">Inicio</NavLink>
        </li>
      </ul>
    </nav>
  )
}