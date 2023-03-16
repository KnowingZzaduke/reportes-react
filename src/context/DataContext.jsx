import { createContext, useState, useEffect } from "react";
import { infoUsuario as data} from "../data/user";
export const DataContext = createContext();

export function DataContextProvider(props) {
  const [infoUsuario, setInfoUsuario] = useState([]);
  function datoUsuario(usuarioU, contraseñaU) {
    setInfoUsuario([
      ...infoUsuario,
      {
        usuario: usuarioU,
        contraseña: contraseñaU
      },
    ]);
  }
  useEffect(() => {
    setInfoUsuario(data);
  }, []);
  return (
    <DataContext.Provider value={{
      infoUsuario,
      datoUsuario
    }}>
      {props.children}
    </DataContext.Provider>
  );
}
