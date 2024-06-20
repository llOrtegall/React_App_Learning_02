import { Outlet } from "react-router-dom"
import { NavBar } from "../Components/NavBar"

export function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  )
}