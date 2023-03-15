import { createContext, useState, useEffect } from "react";
import { infoUsuario as data, infoUsuario } from "../data/user";
export const DataContext = createContext();

export function DataContextProvider(props) {
  const [data, setData] = useState([]);
  function datoUsuario(usuario, contraseña) {
    setData([
      ...infoUsuario,
      {
        usuario,
        contraseña,
      },
    ]);
  }
  useEffect(() => {
    setData(data);
  }, [])
  return (
    <DataContext.Provider value={datoUsuario}>
      {props.children}
    </DataContext.Provider>
  );
}
