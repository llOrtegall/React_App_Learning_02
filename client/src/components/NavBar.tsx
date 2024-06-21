import { Title } from "@tremor/react"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="flex flex-col py-2 border-b-2">
      <div className="flex items-center justify-around py-2 border-b-2">
        <figure>
          <img src="gane.webp" width={100} alt="logo gane" />
        </figure>

        <Title className="text-3xl">Intranet</Title>

        <span className="text-palet-800 font-semibold text-xl">Grupo Empresarial Servired / Multired</span>

        <button className="py-2 px-4 rounded-md font-semibold text-white bg-gradient-to-b from-palet-500 to-palet-600 hover:bg-gradient-to-b hover:from-palet-700 hover:to-palet-800">
          Ingresar
        </button>
      </div>

      <div className="flex items-center justify-around py-2 border-b-2">
        <ul className="flex items-center gap-4 text-base font-medium">
          <NavLink to="/" className="">Inicio</NavLink>
          <NavLink to="/about" className="">Noticias</NavLink>
          <NavLink to="/contact" className="">Productos</NavLink>
          <NavLink to="/contact" className="">Servicios</NavLink>
          <NavLink to="/contact" className="">Quienes Somos</NavLink>
        </ul>
      </div>
    </nav>
  )
}