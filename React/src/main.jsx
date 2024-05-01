import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Sobre from "./pages/Sobre.jsx";
import Contato from "./pages/Contato.jsx";
import ConteudoPrincipal from "./Componentes/Conteudo-Principal/Conteudo-Principal.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import API from "./pages/API.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <ConteudoPrincipal /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contato", element: <Contato /> },
      { path: "api", element: <API /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
