import { FaSistrix, FaFileAlt, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Swal from "sweetalert2";
export function EliminarR() {
  const { deleteReport, infoUsuario, descargarPdf } = useContext(DataContext);
  const [codigo, setCodigo] = useState("");
  console.log(codigo)
  const idElemento = infoUsuario.map((i) => i.id);
  if (deleteReport) {
    console.log("Se está eliminando");
  }
  return (
    <div className="content_reportes">
      <div className="content_buscador">
        <h2>Ingresa el código</h2>
        <form>
          <input type="text" value={codigo} placeholder="código" autoFocus onChange={(e) => setCodigo(e.target.value)}/>
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
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14/03/2023</td>
                <td>
                  <Link>
                    <FaFileAlt onClick={descargarPdf}/>
                  </Link>
                </td>
                <td>
                  <FaTrashAlt onClick={() => deleteReport(idElemento)} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
