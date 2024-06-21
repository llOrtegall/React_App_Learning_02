import { Outlet } from "react-router-dom"
import { NavBar } from "../components/NavBar"

export const Root = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white">
        <NavBar />
      </nav>
      <main className="h-[95vh] overflow-y-auto pt-[5rem]">
        <Outlet />
      </main>
    </>
  )
}