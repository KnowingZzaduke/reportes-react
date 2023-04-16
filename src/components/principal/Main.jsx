import { Link } from "react-router-dom";
import LogoPdf from "/img/img-formato.jpg";
export function Main() {
  return (
    <div className="content_contenido-principal">
      <main>
        <div className="content_info">
          <div className="content_titulo">
            <h1>Descargar reporte técnico</h1>
          </div>
          <div className="content_parrafo">
            <p>
              Aquí podras descargar el reporte correspondiente sobre la
              instalación, mantenimiento y otros detalles.
            </p>
          </div>
        </div>
        <div className="content_descargar-pdf">
          <div className="content_boton">
            <Link to="/signup">
              <button>
                Descarga tu <br /> reporte aquí{" "}
              </button>
            </Link>
          </div>
          <div className="content_img-pdf">
            <div className="content_img">
              <div className="content_small-img">
                <img src={LogoPdf} className="small_img" alt="pdf"/>
              </div>
              <img src={LogoPdf} className="big_img" alt="pdf"/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
