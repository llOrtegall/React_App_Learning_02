import { Carrousel } from '../components/Carrousel'
import { Plataformas } from '../components/Plataformas'

function HomePage () {
  return (
    <section className="flex px-1 gap-1">
      <Carrousel />
      <Plataformas />
    </section>
  )
}

export default HomePage
