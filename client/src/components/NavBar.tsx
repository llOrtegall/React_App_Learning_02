import { NavLink } from "react-router-dom"
import { Title } from "@tremor/react"

export const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-around py-2 border-b-2">

        <img src="gane.webp" width={100} alt="logo gane" className="w-20"/>
  
        <Title className="">Intranet</Title>

        <span className="text-palet-800 font-semibold text-xs">Grupo Empresarial Servired / Multired</span>

        <button className="px-2 py-1 text-xs rounded-md font-semibold text-white bg-gradient-to-b from-palet-500 to-palet-600 hover:bg-gradient-to-b hover:from-palet-700 hover:to-palet-800">
          Ingresar
        </button>
      </div>

      <div className="flex items-center justify-around py-2 border-b bg-gradient-to-b from-palet-500 to-palet-600 text-white">
        <ul className="flex items-center gap-4 text-xs font-medium">
          <NavLink to="/" className="">Inicio</NavLink>
          <NavLink to="/noticias" className="">Noticias</NavLink>
          <NavLink to="/productos" className="">Productos</NavLink>
          <NavLink to="/quienes-somos" className="">Quienes Somos</NavLink>
        </ul>
      </div>
    </>
  )
}