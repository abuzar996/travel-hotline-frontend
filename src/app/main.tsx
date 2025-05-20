import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "@fontsource/poppins";
import router from "src/router";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const route = createBrowserRouter(router);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
