import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./Error-page";
import "./assets/scss/app.scss";
import { Signin } from "./routes/Principal/Signin";
import { Signup } from "./routes/Principal/Signup";
import { Usuarios } from "./routes/usuarios/Usuarios";
import {Admin} from "./routes/admin/Administradores";
import { DataContextProvider } from "./context/DataContext";
import { Bienvenida } from "./routes/admin/Bienvenida";
import { AgregarR } from "./routes/admin/AgregarR";
import { EliminarR } from "./routes/admin/EliminarR";
import { DetallesR } from "./routes/admin/DetallesR";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path:  "/administradores",
    element: <Admin/>,
    children: [
      {
        path: "/administradores/bienvenida",
        element: <Bienvenida/>
      },
      {
        path : "/administradores/agregar-reportes",
        element: <AgregarR/>
      },
      {
        path: "/administradores/eliminar-reportes",
        element: <EliminarR/>
      },
      {
        path: "/administradores/detalles-reportes",
        element: <DetallesR/>
      }
    ]
    
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  </React.StrictMode>
);
