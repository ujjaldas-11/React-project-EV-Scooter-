import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./Pages/Details/Details.jsx";
import Save from "./Pages/Save/Save.jsx";
import Gallery from "./Pages/Gallery/Gallery.jsx";
import Layout from "./layout.jsx";

const router = createBrowserRouter([
            {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <App />,
            },
            {
              path: "/pages/details",
              element: <Details />,
            },
            {
              path: "/pages/save",
              element: <Save />,
            },
            {
              path: "/pages/gallery",
              element: <Gallery />,
            },
          ],
        },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
