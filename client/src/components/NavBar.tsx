import { NavLink } from "react-router-dom"
import { Title } from "@tremor/react"

const Links = [
  { id: 1, to: "/", label: "Inicio" },
  { id: 2, to: "/noticias", label: "Noticias" },
  { id: 3, to: "/productos", label: "Productos" },
  { id: 4, to: "/quienes-somos", label: "Quienes Somos" }
]

export const NavBar = () => {
  return (
    <>
      <section className="flex items-center justify-around py-2 border-b-2">
        <img src="gane.webp" width={100} alt="logo gane" className="w-20" />
        <Title className="">Intranet</Title>
        <span className="text-palet-800 font-semibold text-xs">Grupo Empresarial Servired / Multired</span>
        <button className="px-2 py-1 text-xs rounded-md font-semibold text-white bg-gradient-to-b from-palet-500 to-palet-600 hover:bg-gradient-to-b hover:from-palet-700 hover:to-palet-800">
          Ingresar
        </button>
      </section>

      <section className="flex items-center justify-around py-2 border-b bg-gradient-to-b from-palet-500 to-palet-600 text-white">
        <ul className="flex items-center gap-4 text-xs font-medium">
          {Links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.to} className="hover:underline">{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}