import { Card, Title } from "@tremor/react"

const images = [
  { titulo: 'Plataforma EduGane', src: 'modle.webp', alt: 'Carrousel Image 3', to: 'http://172.20.1.114/' },
  { titulo: 'Formulario GH / SST', src: 'ghsst.webp', alt: 'Carrousel Image 2', to: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScxnf6_88PP1yKD-4IU_2u7DscK-hzCT8cVZY4vO-_tcx130g/viewform' }, 
  { titulo: 'Correo Hotmail', src: 'hotmail.webp', alt: 'Carrousel Image 3', to: 'https://login.live.com/login.srf' },
  { titulo: 'Plataforma Alfreso', src: 'Alfresco.webp', alt: 'Carrousel Image 1', to: 'http://172.20.1.115:8080/share/page/' }, 
  { titulo: 'Plataforma SURA', src: 'sura.webp', alt: 'image sura', to: 'https://www.arlsura.com/index.php/inicio-2' }
]

export const Plataformas = () => {
  return (
    <Card className="w-4/12">
      <Title className="text-center pb-2">Acceso Plataformas</Title>
      <div className="grid grid-cols-2">
        {images.map((image, index) => (
          <a href={image.to} className="flex flex-col items-center hover:text-blue-600" target="_blank" rel="noopener noreferrer" >
            <img key={index} src={image.src} alt={image.alt}
              className="w-28 xl:w-32 cursor-pointer object-cover rounded-full flex justify-center items-start gap-x-2 py-2 px-4 hover:scale-110 transition" />
            <p className="text-xs xl:text-base font-semibold">{image.titulo}</p>
          </a>
        ))
        }
      </div>
    </Card>
  )
}