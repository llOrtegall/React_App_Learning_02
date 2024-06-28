import React, { Suspense } from 'react'
import { createBrowserRouter, RouteObject } from 'react-router-dom'

// Tipado para la función de importación
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ImportFunc = () => Promise<{ default: React.ComponentType<any> }>;

// HOC para cargar componentes de manera perezosa
function lazyWithPreload (importFunc: ImportFunc) {
  const Component = React.lazy(importFunc)
  return (props: React.ComponentProps<typeof Component>) => (
    <Suspense fallback={<div>Cargando...</div>}>
      <Component {...props} />
    </Suspense>
  )
}

// Usando el HOC para importaciones dinámicas
const Root = lazyWithPreload(() => import('../pages/Root'))
const LoginPage = lazyWithPreload(() => import('../pages/LoginPage'))
const NotFound = lazyWithPreload(() => import('../pages/NotFound'))
const HomePage = lazyWithPreload(() => import('../pages/Home'))
const NoticiasPage = lazyWithPreload(() => import('../pages/Noticias'))
const ProductosPage = lazyWithPreload(() => import('../pages/Productos'))
const QuienesSomosPage = lazyWithPreload(() => import('../pages/QuienesSomos'))

// Tipado para las rutas
const routes: RouteObject[] = [
  { path: '/login', element: <LoginPage /> },
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'noticias', element: <NoticiasPage /> },
      { path: 'productos', element: <ProductosPage /> },
      { path: 'quienes-somos', element: <QuienesSomosPage /> }
    ]
  }
]

export const router = createBrowserRouter(routes)
