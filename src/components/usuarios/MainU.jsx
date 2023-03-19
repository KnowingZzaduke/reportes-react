import Documentos from "/img/documentos.png";
import { FaSistrix, FaFileAlt } from "react-icons/fa";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
export function MainU() {
  const { descargarPdf } = useContext(DataContext);
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
            <form>
              <input type="text" placeholder="código" autoFocus />
              <button>
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
                  <tr>
                    <td>14/03/2023</td>
                    <td>
                      <Link>
                        <FaFileAlt title="Pdf" onClick={descargarPdf}/>
                      </Link>
                    </td>
                    <td>Ninguna</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
