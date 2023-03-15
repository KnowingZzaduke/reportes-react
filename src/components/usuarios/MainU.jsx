import Documentos from "/img/documentos.png";
import { FaSistrix } from "react-icons/fa";
export function MainU() {
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
              <input type="text" />
              <button>
                <FaSistrix />
              </button>
            </form>
          </div>
          <div className="content_tabla-reportes">
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
                  <td>Archivo</td>
                  <td>Ninguna</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
