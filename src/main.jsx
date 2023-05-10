import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./Error-page";
import "./assets/scss/app.scss";
import { Signin } from "./routes/Principal/Signin";
import { Signup } from "./routes/Principal/Signup";
import { Usuarios } from "./routes/usuarios/Usuarios";
import { Admin } from "./routes/admin/Administradores";
import { DataContextProvider } from "./context/DataContext";
import { Bienvenida } from "./routes/admin/Bienvenida";
import { AgregarR } from "./routes/admin/AgregarR";
import { EliminarR } from "./routes/admin/EliminarR";
import { DetallesR } from "./routes/admin/DetallesR";
import { Email } from "./routes/admin/Email";
import { HOC } from "./components/validation/HOC";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/signup",
    element: (
      <HOC>
        <Signup />
      </HOC>
    ),
  },
  {
    path: "/signin",
    element: (
      <HOC>
        <Signin />
      </HOC>
    ),
  },
  {
    path: "/usuarios",
    element: (
      <HOC>
        <Usuarios />
      </HOC>
    ),
  },
  {
    path: "/administradores",
    element: (
      <HOC>
        <Admin />
      </HOC>
    ),
    children: [
      {
        path: "/administradores/bienvenida",
        element: <Bienvenida />,
      },
      {
        path: "/administradores/agregar-reportes",
        element: <AgregarR />,
      },
      {
        path: "/administradores/eliminar-reportes",
        element: <EliminarR />,
      },
      {
        path: "/administradores/detalles-reportes",
        element: <DetallesR />,
      },
      {
        path: "/administradores/formulario-email",
        element: <Email />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  </React.StrictMode>
);
