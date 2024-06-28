const images = [
  { titulo: 'Plataforma EduGane', src: 'modle.webp', alt: 'Carrousel Image 3', to: 'http://172.20.1.114/' },
  { titulo: 'Formulario GH / SST', src: 'ghsst.webp', alt: 'Carrousel Image 2', to: 'https://docs.google.com/forms/u/1/d/e/1FAIpQLScxnf6_88PP1yKD-4IU_2u7DscK-hzCT8cVZY4vO-_tcx130g/viewform' },
  { titulo: 'Correo Hotmail', src: 'hotmail.webp', alt: 'Carrousel Image 3', to: 'https://login.live.com/login.srf' },
  { titulo: 'Plataforma Alfreso', src: 'Alfresco.webp', alt: 'Carrousel Image 1', to: 'http://172.20.1.115:8080/share/page/' },
  { titulo: 'Plataforma SURA', src: 'sura.webp', alt: 'image sura', to: 'https://www.arlsura.com/index.php/inicio-2' }
]

export const Plataformas = () => {
  return (
    <section className="flex flex-col w-4/12 gap-2 py-2 items-center card">
      <h1 className="text-center text-sm">Acceso Plataformas</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <a key={index} href={image.to} className="flex flex-col items-center hover:text-blue-600" target="_blank" rel="noopener noreferrer" >
            <img src={image.src} alt={image.alt}
              className="w-20 xl:w-32 cursor-pointer object-cover rounded-full border flex justify-center items-start hover:scale-110 transition" />
            <p className="text-[0.7rem] text-center font-medium text-balance">{image.titulo}</p>
          </a>
        ))
        }
      </div>
    </section>
  )
}
