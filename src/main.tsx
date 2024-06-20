import { RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { router } from './Routes/Router'

import { StrictMode } from "react";
import "./index.css";


createRoot(document.getElementById("root")!)
  .render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )