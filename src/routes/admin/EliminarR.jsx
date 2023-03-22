import {
  FaSistrix,
  FaFileAlt,
  FaTrashAlt,
  FaEdit,
  FaTimesCircle,
  FaEyeSlash,
  FaRegEye,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Swal from "sweetalert2";
import { functions as fc } from "../../data/request";

export function EliminarR() {
  const { infoUsuario, descargarPdf } = useContext(DataContext);
  const [codigo, setCodigo] = useState("");

  const [usuario, setUsuario] = useState("");
  const [datos, setDatos] = useState([]);
  const [modal, setModal] = useState(false);
  const idElemento = infoUsuario.map((i) => i.id);

  const [formulario, setFormulario] = useState({
    code: "",
    date: "",
    comment: "",
    files: "",
    nombre: "",
  });

  async function handleSSubmit(e) {
    e.preventDefault();
    let data = await fc.getReports(usuario);
    data = data.data;
    //console.log(data);
    if (data == undefined) {
      Swal.fire({
        title: "Error",
        text: "Error la pagina no envio datos",
        icon: "error",
      });
    } else {
      if (data.salida == "error") {
        Swal.fire({
          title: "Error",
          text: data.data,
          icon: "error",
        });
      } else if (data.salida == "exito") {
        const nuevaFila = {
          id: data.id,
          date: data.date,
          nombre: "/api.php?file=" + data.file,
          edad: data.comment,
        };
        setDatos([nuevaFila]);
        setFormulario({
          code: data.id,
          date: data.date,
          comment: data.comment,
          nombre: "/api.php?file=" + data.file,
        });
      }
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await fc.updateReport(formulario);
    data = data.data;
    if (data == undefined) {
      setModal(false);
      Swal.fire({
        title: "Error",
        text: "Error la pagina no envio datos",
        icon: "error",
      });
    } else {
      if (data.salida == "exito") {
        Swal.fire({
          title: "Exito",
          text: "Reporte actualizado correctamente.",
          icon: "success",
        });
        setModal(false);

        const nuevaFila = {
          id: formulario.code,
          date: formulario.date,
          nombre: "/api.php?file=" + formulario.code,
          edad: formulario.comment,
        };
        setDatos([nuevaFila]);
      } else {
        Swal.fire({
          title: "Error",
          text: "El reporte no pudo ser actualizado, Error:." + data.data,
          icon: "error",
        });
      }
    }
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
  function deleteReport(code) {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, bórralo",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Aquí puedes definir la lógica para borrar el elemento
        let data = await fc.deleteReport(code);
        if (!data) {
          Swal.fire({
            title: "Error",
            text: "Error la pagina no envio datos",
            icon: "error",
          });
        } else {
          data = data.data;
          if (data.salida == "error") {
            Swal.fire({
              title: "Error",
              text: "El reporte no pudo ser borrado",
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "Exito",
              text: data.data,
              icon: "success",
            });
            setDatos([]);
          }
        }
      }
    });
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
              <label>Código</label>
              <input
                name="code"
                readOnly
                required
                value={formulario.code}
                onChange={handleInputChange}
                type="text"
                placeholder="#12345"
              />
            </div>
            <div className="content_input">
              <label>Editar fecha</label>
              <input
                required
                name="date"
                value={formulario.date}
                onChange={handleInputChange}
                type="date"
              />
            </div>
            <div className="content_input">
              <label>Editar observaciones</label>
              <textarea
                required
                name="comment"
                value={formulario.comment}
                onChange={handleInputChange}
              />
            </div>
            <div className="content_input input_file">
              <div className="input">
                <label>Seleccionar archivo</label>
                <input
                  name="files"
                  type="file"
                  onInput={handleInputChange}
                  className="input_file"
                />
              </div>

              <div className="content_toggle-vs">
                <Link to={formulario.nombre} target="_blank">
                  <FaRegEye title="Pdf" />
                  <p>Visualizar documento</p>
                </Link>
              </div>
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
        <h2>Ingresa tu código</h2>
        <form onSubmit={handleSSubmit}>
          <input
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            placeholder="código"
            autoFocus
          />
          <button type="submit">
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
                <th>Id</th>
                <th>Fecha</th>
                <th>PDF</th>
                <th>Observación</th>
                <th>Herramientas</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((fila) => (
                <tr key={fila.id}>
                  <td>{fila.id}</td>
                  <td>{fila.date}</td>
                  <td>
                    <Link to={fila.nombre} target="_blank">
                      <FaFileAlt title="Pdf" />
                    </Link>
                  </td>
                  <td>{fila.edad}</td>
                  <td className="opciones">
                    <FaEdit onClick={() => mostrarModal(fila.id)} />
                    <FaTrashAlt onClick={() => deleteReport(fila.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
