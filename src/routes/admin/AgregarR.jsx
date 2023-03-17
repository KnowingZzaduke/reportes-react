import { functions as Fc } from "../../data/request";
import React, { useState } from 'react';

export function AgregarR() {

  const [formulario, setFormulario] = useState({
    id: '',
    date: '',
    comment: '',
    files: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    Fc.makeReport(formulario);
  };

  const handleInputChange = event => {
    const { name, value, files } = event.target;
  
    if (name === "files") {
      setFormulario({ ...formulario, [name]: files[0] });
    } else {
      setFormulario({ ...formulario, [name]: value });
    }
  };
  
  return (
    <div className="content_agregar-datos">
      <form onSubmit={handleSubmit} >
        <h2>Agregar reportes</h2>
        <fieldset>
          <div className="content_input">
            <label>Agregar código</label>
            <input name="id" value={formulario.id} onChange={handleInputChange} type="number" placeholder="#12345" autoFocus/>
          </div>
          <div className="content_input">
            <label>Agregar fecha</label>
            <input name="date" value={formulario.date} onChange={handleInputChange} type="date" />
          </div>
          <div className="content_input">
            <label>Agregar observaciones</label>
            <textarea name="comment" value={formulario.comment} onChange={handleInputChange} />
          </div>
          <div className="content_input">
            <label>Seleccionar archivo</label>
            <input name="files" type="file" onInput={handleInputChange} className="input_file"/>
          </div>
          <div className="content_boton">
            <button>Enviar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
