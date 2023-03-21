import { functions as fc } from "../../data/request";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaRegClone } from "react-icons/fa";
import { useRef } from "react";
import Swal from "sweetalert2";
export function AgregarR() {
  const inputRef = useRef([]);
  const [formulario, setFormulario] = useState({
    id: uuidv4(),
    date: "",
    comment: "",
    files: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await fc.makeReport(formulario);
    data = data.data;
    if (data.salida == "error") {
      Swal.fire({
        title: "Error",
        text: data.data,
        icon: "error",
      });
    } else if (data.salida == "exito") {
      Swal.fire({
        title: "Exito",
        text: "El archivo se subió correctamente.",
        icon: "success",
      });
    }
  }


  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "files") {
      setFormulario({ ...formulario, [name]: files[0] });
    } else {
      setFormulario({ ...formulario, [name]: value });
    }
  };

  const copyQr = () => {
    const value = inputRef.current.select();
    document.execCommand("copy");
    Swal.fire({
      title: "Exito",
      text: "Código copiado correctamente",
      icon: "success"
    })
  };

  return (
    <div className="content_agregar-datos">
      <div className="content_titulo">
        <h1>Agregar reportes </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h2> Formulario de agregar reportes</h2>
        <fieldset>
          <div className="content_input">
            <label>Código</label>
            <input
              id="uuid-input"
              name="id"
              onChange={handleInputChange}
              value={formulario.id}
              type="text"
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
              required
            />
          </div>
          <div className="content_input">
            <label>Agregar observaciones</label>
            <textarea
              name="comment"
              value={formulario.comment}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="content_input">
            <label>Seleccionar archivo</label>
            <input
              name="files"
              type="file"
              onInput={handleInputChange}
              className="input_file"
              required
            />
          </div>
          <div className="content_boton">
            <button>Enviar</button>
          </div>
        </fieldset>
      </form>
      <div className="content_input-copiar">
        <label>Copiar código</label>
        <div className="input">
          <input
            name="files"
            type="text"
            className="input_code"
            required
            defaultValue={formulario.id}
            ref={inputRef}
            readOnly
          />
          <div className="toggle_copiar">
            <FaRegClone title="copiar" onClick={copyQr} />
          </div>
        </div>
      </div>
    </div>
  );
}
