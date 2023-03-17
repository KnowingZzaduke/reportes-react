export function AgregarR() {
  return (
    <div className="content_agregar-datos">
      <form>
        <h2>Agregar reportes</h2>
        <fieldset>
          <div className="content_input">
            <label>Agregar código</label>
            <input type="number" placeholder="#12345" autoFocus/>
          </div>
          <div className="content_input">
            <label>Agregar fecha</label>
            <input type="date" />
          </div>
          <div className="content_input">
            <label>Agregar observaciones</label>
            <textarea />
          </div>
          <div className="content_input">
            <label>Seleccionar archivo</label>
            <input type="file" className="input_file"/>
          </div>
          <div className="content_boton">
            <button>Enviar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
