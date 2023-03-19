import Documentos from "/img/documentos.png";
import { FaSistrix, FaFileAlt } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { functions as fc } from "../../data/request";

export function MainU() {
  const { descargarPdf } = useContext(DataContext);
  const [usuario, setUsuario] = useState("");

  const [datos, setDatos] = useState([
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    let data = await fc.getReports(usuario);
    data = data.data;
    if(data == undefined){
      Swal.fire({
        title: "Error",
        text: "Error la pagina no envio datos",
        icon: "error",
      });
    }else{
      if (data.salida == "error") {
        Swal.fire({
          title: "Error",
          text: data.data,
          icon: "error",
        });
      } else if (data.salida == "exito") {
        const nuevaFila = { id: data.date, nombre: "http://127.0.0.1/api.php?file="+data.file, edad: data.comment };
        setDatos([...datos, nuevaFila]);
        
      }

    }

  }
  return (
    <div className="content_contenido-principal-u">
      <main>
        <div className="content_instrucciones">
          <div className="content_main-left">
            <div className="content_info">
              <div className="content_titulo">
                <h1>Generador de reportes</h1>
              </div>
              <div className="content_parrafo">
                <p>
                  Para poder generar tu reporte, debes seguir los siguientes
                  pasos:
                </p>
              </div>
              <div className="content_pasos">
                <ul>
                  <li>Ingresar tú código en el buscador</li>
                  <li>Presiona en buscar</li>
                  <li>Revisa la tabla de reportes</li>
                  <li>Presiona archivo para descargar el reporte</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="content_main-right">
            <div className="content_logo">
              <img src={Documentos} />
            </div>
          </div>
        </div>
        <div className="content_reportes">
          <div className="content_buscador">
            <h2>Ingresa tu código</h2>
            <form onSubmit={handleSubmit}>
              <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="código" autoFocus />
              <button type="submit" >
                <FaSistrix />
              </button>
            </form>
          </div>
          <div className="content_tabla-reportes">
            <div className="content_titulo">
              <h2>Resultados de búsqueda</h2>
              <FaSistrix />
            </div>
            <div className="content_tabla">
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>PDF</th>
                    <th>Observación</th>
                  </tr>
                </thead>
                <tbody>
                {datos.map((fila) => (
                  <tr key={fila.id}>
                    <td>{fila.id}</td>
                    <td>
                      <Link to={fila.nombre} target="_blank">
                        <FaFileAlt title="Pdf"/>
                      </Link></td>
                    <td>{fila.edad}</td>
                  </tr>
                ))}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
