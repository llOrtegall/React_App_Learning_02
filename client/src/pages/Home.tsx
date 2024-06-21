import { Carrousel } from "../components/Carrousel"
import { Plataformas } from "../components/Plataformas"

export const Home = () => {
  return (
    <section className="flex">
      <Carrousel />
      <Plataformas />
    </section>
  )
}