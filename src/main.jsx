import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from "./Error-page";
import "./assets/scss/app.scss";
import { Signin } from "./routes/Principal/Signin";
import { Usuarios } from "./routes/usuarios/Usuarios";
import {Admin} from "./routes/admin/Administradores";
import { DataContextProvider } from "./context/DataContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
    element: <Admin/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  </React.StrictMode>
);
