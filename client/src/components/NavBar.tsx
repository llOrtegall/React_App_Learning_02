import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from './ui/Button'

const Links = [
  { id: 1, to: '/', label: 'Inicio' },
  { id: 2, to: '/noticias', label: 'Noticias' },
  { id: 3, to: '/productos', label: 'Productos' },
  { id: 4, to: '/quienes-somos', label: 'Quienes Somos' }
]

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <>
      <section className="flex items-center justify-around py-2 border-b-2">
        <img src="gane.webp" width={100} alt="logo gane" className="w-20" />
        <h1 className="">Intranet</h1>
        <span className="text-palet-800 font-semibold text-xs">Grupo Empresarial Servired / Multired</span>
        <div className='text-sm'>
          <Button onClick={() => navigate('/login')}>
            Ingresar
          </Button>
        </div>
      </section>

      <section className="flex items-center justify-around py-2 border-b bg-gradient-to-b from-jaxx-500 to-jaxx-600 text-white">
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
