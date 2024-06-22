import { createBrowserRouter } from "react-router-dom";
import { Root } from "../pages/Root";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Noticias } from '../pages/Noticias'
import { Productos } from '../pages/Productos'
import { QuienesSomos } from '../pages/QuienesSomos'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'noticias',
        element: <Noticias />
      },
      {
        path: 'productos',
        element: <Productos />
      },
      {
        path: 'quienes-somos',
        element: <QuienesSomos />
      }
    ]
  }
]);
