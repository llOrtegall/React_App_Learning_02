import { createBrowserRouter } from "react-router-dom";
import { About, Blog, Home, NotFound } from '../Pages'
import { Layout } from "../Layout/Layout";

import { loaderBlog } from "../Services";


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
        loader: loaderBlog
      }
    ]
  }
]);