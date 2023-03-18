import { functions as fc } from "../../data/request";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export function AgregarR() {
  const [formulario, setFormulario] = useState({
    id: uuidv4(),
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

  return (
    <div className="content_agregar-datos">
      <div className="content_titulo">
        <h1>Agregar reportes </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <h2> Formulario de agregar reportes</h2>
        <fieldset>
          <div className="content_input">
            <label >código</label>
            <input
              id="uuid-input"
              name="id"
              value={formulario.id}
              type="text"
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
    </div>
  );
}
