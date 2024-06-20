import { createBrowserRouter } from "react-router-dom";
import { About, Blog, Home, NotFound } from '../Pages'
import { Layout } from "../Layout/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      }
    ]
  }
]);