import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error } from './Error-page';
import './assets/scss/app.scss';
import { Signin } from './routes/Principal/Signin';
import {Usuarios} from './routes/usuarios/Usuarios';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
  },
  {
    path: "/signin",
    element: <Signin/>
  },
  {
    path: "/usuarios",
    element: <Usuarios/>
  }
  

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
