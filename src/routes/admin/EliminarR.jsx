import {
  FaSistrix,
  FaFileAlt,
  FaTrashAlt,
  FaEdit,
  FaTimesCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Swal from "sweetalert2";
export function EliminarR() {
  const { infoUsuario, descargarPdf, deleteReport } = useContext(DataContext);
  const [codigo, setCodigo] = useState("");
  const [modal, setModal] = useState(false);
  const idElemento = infoUsuario.map((i) => i.id);
  if(deleteReport){
    console.log("Eliminar")
  }
  const [formulario, setFormulario] = useState({
    id: "",
    date: "",
    comment: "",
    files: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    fc.makeReport(formulario);
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "files") {
      setFormulario({ ...formulario, [name]: files[0] });
    } else {
      setFormulario({ ...formulario, [name]: value });
    }
  };

  //Modal
  function mostrarModal() {
    setModal(!modal);
  }

  return (
    <div className="content_reportes">
      <div className={`content_modal-n ${modal ? "content_modal-d" : " "}`}>
        <form onSubmit={handleSubmit}>
          <div className="content_header">
            <div className="content_titulo">
              <h2> Formulario de editar reportes</h2>
            </div>
            <div className="content_toggle-cerrar">
              <FaTimesCircle onClick={mostrarModal} />
            </div>
          </div>
          <fieldset>
            <div className="content_input">
              <label>Agregar código</label>
              <input
                name="id"
                value={formulario.id}
                onChange={handleInputChange}
                type="number"
                placeholder="#12345"
                autoFocus
              />
            </div>
            <div className="content_input">
              <label>Agregar fecha</label>
              <input
                name="date"
                value={formulario.date}
                onChange={handleInputChange}
                type="date"
              />
            </div>
            <div className="content_input">
              <label>Agregar observaciones</label>
              <textarea
                name="comment"
                value={formulario.comment}
                onChange={handleInputChange}
              />
            </div>
            <div className="content_input">
              <label>Seleccionar archivo</label>
              <input
                name="files"
                type="file"
                onInput={handleInputChange}
                className="input_file"
              />
            </div>
            <div className="content_boton">
              <button>Enviar</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="content_titulo">
        <h1>Eliminar o editar reportes</h1>
      </div>
      <div className="content_buscador">
        <h2>Ingresa el código</h2>
        <form>
          <input
            type="text"
            value={codigo}
            placeholder="código"
            autoFocus
            onChange={(e) => setCodigo(e.target.value)}
          />
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
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14/03/2023</td>
                <td>
                  <Link>
                    <FaFileAlt onClick={descargarPdf} />
                  </Link>
                </td>
                <td className="opciones">
                  <FaEdit onClick={mostrarModal} />
                  <FaTrashAlt onClick={deleteReport}/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
