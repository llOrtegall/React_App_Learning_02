import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

function Root () {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white">
        <NavBar />
      </nav>
      <main className="h-[100vh] overflow-y-auto pt-20">
        <Outlet />
      </main>
    </>
  )
}

export default Root
