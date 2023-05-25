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
import { useState } from "react";
import Swal from "sweetalert2";
import { functions as fc } from "../../data/request";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function EliminarR() {
  const [usuario, setUsuario] = useState("");
  const [datos, setDatos] = useState([]);
  const [modal, setModal] = useState(false);

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
    if (data == undefined) {
      Swal.fire({
        title: "Error",
        text: "Error la pagina no envio datos",
        icon: "error",
        heightAuto: false,
      });
    } else {
      if (data.salida == "error") {
        Swal.fire({
          title: "Error",
          text: data.data,
          icon: "error",
          heightAuto: false,
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
        heightAuto: false,
      });
    } else {
      if (data.salida == "exito") {
        Swal.fire({
          title: "Exito",
          text: "Reporte actualizado correctamente.",
          icon: "success",
          heightAuto: false,
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
          heightAuto: false,
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
      heightAuto: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Aquí puedes definir la lógica para borrar el elemento
        let data = await fc.deleteReport(code);
        if (!data) {
          Swal.fire({
            title: "Error",
            text: "Error la pagina no envio datos",
            icon: "error",
            heightAuto: false,
          });
        } else {
          data = data.data;
          if (data.salida == "error") {
            Swal.fire({
              title: "Error",
              text: "El reporte no pudo ser borrado",
              icon: "error",
              heightAuto: false,
            });
          } else {
            Swal.fire({
              title: "Exito",
              text: data.data,
              icon: "success",
              heightAuto: false,
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
        <TableContainer component={Paper} className="tabla">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Fecha</TableCell>
                <TableCell align="center">PDF</TableCell>
                <TableCell align="center">Observación</TableCell>
                <TableCell align="center">Herramientas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {datos.map((fila) => (
                <TableRow
                  key={fila.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {fila.id}
                  </TableCell>
                  <TableCell align="center">{fila.date}</TableCell>
                  <TableCell align="center">
                    <Link to={fila.nombre} target="_blank">
                      <FaFileAlt title="Pdf" />
                    </Link>
                  </TableCell>
                  <TableCell align="center">{fila.edad}</TableCell>
                  <TableCell align="center">
                    <FaEdit onClick={() => mostrarModal(fila.id)} />
                    <FaTrashAlt onClick={() => deleteReport(fila.id)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <div className="content_tabla">
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
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>
    </div>
  );
}
