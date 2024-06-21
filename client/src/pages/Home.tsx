import { Card, Title } from "@tremor/react"
import { Carrousel } from "../components/Carrousel"

const images = [
  { titulo: 'Plataforma Alfreso', src: 'Alfresco.webp', alt: 'Carrousel Image 1' }, 
  { titulo: 'Formulario GH / SST', src: 'ghsst.webp', alt: 'Carrousel Image 2' }, 
  { titulo: 'Correo Hotmail', src: 'hotmail.webp', alt: 'Carrousel Image 3' },
  { titulo: 'Plataforma EduGane', src: 'modle.webp', alt: 'Carrousel Image 3' },
  { titulo: 'Plataforma Simba', src: 'sinba.webp', alt: 'Carrousel Image 3' }
]

export const Home = () => {
  return (
    <section className="flex">
      <Carrousel />
      <Card className="w-4/12">
        <Title className="text-center pb-2">Acceso Plataformas</Title>
        <div className="grid grid-cols-3 gap-1 place-items-center">
          { images.map((image, index) => (
            <div className="flex flex-col items-center" >
              <img key={index} src={image.src} alt={image.alt}
                className="cursor-pointer object-cover rounded-full flex justify-center items-start gap-x-2 py-2 px-4 hover:scale-110 transition hover:bg-white/10" />
              <p className="text-lg font-semibold">{image.titulo}</p>
            </div>
          ))
        }
        </div>
      </Card>
    </section>
  )
}