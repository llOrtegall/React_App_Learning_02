import { Card } from "@tremor/react"
import { Carrousel } from "../components/Carrousel"
import { Plataformas } from "../components/Plataformas"

export const Home = () => {
  return (
    <section className="grid grid-cols-12">
      <Card className="col-span-8">
        <Carrousel />
      </Card>
      <Card className="col-span-4">
        <Plataformas />
      </Card>
    </section>
  )
}