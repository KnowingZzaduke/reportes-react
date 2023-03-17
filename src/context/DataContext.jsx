import { createContext, useState, useEffect } from "react";
import { infoUsuario as data } from "../data/user";
export const DataContext = createContext();

export function DataContextProvider(props) {
  const [infoUsuario, setInfoUsuario] = useState([]);
  const [elemento, setElemento] = useState([]);
  const [pdf, setPdf] = useState([]);
  function datoUsuario(usuarioU, contraseñaU) {
    setInfoUsuario([
      ...infoUsuario,
      {
        usuario: usuarioU,
        contraseña: contraseñaU,
      },
    ]);
  }
  function descargarPdf() {
    console.log("Abrir nueva pentaña del pdf")
  }
  
  function deleteReport(idReporte) {
    // elemento sería los datos que llegan de la base de datos
    setElemento(elemento.filter((e) => e.id !== idReporte));
  }

  useEffect(() => {
    //Login de usuarios
    setInfoUsuario(data);
    //Eliminar reportes
    setElemento(data);
    //Descargar pdf
    setPdf(data);
  }, []);
  return (
    <DataContext.Provider
      value={{
        infoUsuario,
        datoUsuario,
        descargarPdf,
        deleteReport,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
