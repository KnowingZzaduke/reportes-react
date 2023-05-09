import Documentos from "/img/documentos.png";
import { FaSistrix, FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { functions as fc } from "../../data/request";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function MainU() {
  const [usuario, setUsuario] = useState("");

  const [datos, setDatos] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    let data = await fc.getReports(usuario);
    data = data.data;
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
          id: data.date,
          nombre: "http://127.0.0.1/api.php?file=" + data.file,
          edad: data.comment,
        };
        setDatos([nuevaFila]);
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
                  <li>Ingresa tu código en el buscador.</li>
                  <li>Presiona en buscar.</li>
                  <li>Revisa la tabla de reportes.</li>
                  <li>Presiona archivo para descargar el reporte.</li>
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
                    <TableCell align="center">Fecha</TableCell>
                    <TableCell align="center">PDF</TableCell>
                    <TableCell align="center">Observación</TableCell>
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
                      <TableCell align="center">
                        <Link to={fila.nombre} target="_blank">
                          <FaFileAlt title="Pdf" />
                        </Link>
                      </TableCell>
                      <TableCell align="center">{fila.edad}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
