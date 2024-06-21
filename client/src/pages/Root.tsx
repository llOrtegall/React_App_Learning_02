import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export const Root = () => {
  return (
    <section>
      <NavBar />
      <Outlet />
    </section>
  )
}