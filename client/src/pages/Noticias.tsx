import { Callout, Card, Title } from '@tremor/react';

export const Noticias = () => {
  return (

    <Card className='flex flex-col gap-2' title='Noticas - Novedades'>

      <Title className='text-center pb-2 text-xl'>Noticias / Novedades</Title>

      <main className='flex gap-4'>
        <section className=''>
          <div className="mx-auto max-w-lg space-y-6">
            <p className='font-semibold text-justify'>textos de ejemplos: Sección para novedades criticas de interes y general</p>
            <Callout title="Reporte Novedades Críticas" color="red">
              Se presenta novedad con el sistema de facturación en los servicios de Banco TTFR en la sucursales de Multired/Servired. Se recomienda a los usuarios que se acerquen a la sucursal más cercana para obtener más información.
            </Callout>
            <Callout title="Reporte De Interés" color="teal">
              Se inicio el pago colombia mayor en nuestras sucursales de la empresa. Se recuerda a los empleados que deben acercarse a la sucursal más cercana para retirar su sueldo.
            </Callout>
            <Callout title="Información General" color="indigo">
              <p className='pb-2'>- Se informa que la empresa ha tenido un incremento del 20% en las ventas de los productos de la empresa. Se agradece a los empleados por su esfuerzo y dedicación</p>
              <p> - Se informa que para solicitudes de permisos de vacaciones se debe enviar un correo a la dirección de correo de la empresa. o mediante el sistema de tickets de la empresa.</p>
            </Callout>
          </div>
        </section>
        <section className='flex flex-col gap-2'>
          <Card decoration='left'>
            <h2>Noticia # 1</h2>
            (text-de-ejemplo) <span className='font-semibold'>- Aquí iran las noticias de la empresa tendrán resumen en la card y al dar click se abrirá la noticia completa.</span>
            <p>Texto de la noticia # 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur unde quia libero dolore aut ipsa atque quas minima, possimus incidunt suscipit temporibus est error. Molestiae repudiandae odit nostrum porro aut.</p>
          </Card>
          <Card decoration='left'>
            <h2>Noticia # 2</h2>
            (text-de-ejemplo) <span className='font-semibold'>- Aquí iran las noticias de la empresa tendrán resumen en la card y al dar click se abrirá la noticia completa.</span>
            <p>Texto de la noticia # 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur unde quia libero dolore aut ipsa atque quas minima, possimus incidunt suscipit temporibus est error. Molestiae repudiandae odit nostrum porro aut.</p>
          </Card>
          <Card decoration='left'>
            <h2>Noticia # 3</h2>
            (text-de-ejemplo) <span className='font-semibold'>- Aquí iran las noticias de la empresa tendrán resumen en la card y al dar click se abrirá la noticia completa.</span>
            <p>Texto de la noticia # 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur unde quia libero dolore aut ipsa atque quas minima, possimus incidunt suscipit temporibus est error. Molestiae repudiandae odit nostrum porro aut.</p>
          </Card>
          <Card decoration='left'>
            <h2>Noticia # 4</h2>
            (text-de-ejemplo) <span className='font-semibold'>- Aquí iran las noticias de la empresa tendrán resumen en la card y al dar click se abrirá la noticia completa.</span>
            <p>Texto de la noticia # 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur unde quia libero dolore aut ipsa atque quas minima, possimus incidunt suscipit temporibus est error. Molestiae repudiandae odit nostrum porro aut.</p>
          </Card>
        </section>
      </main>
    </Card>
  )
}



