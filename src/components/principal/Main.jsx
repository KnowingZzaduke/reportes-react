import { Link } from "react-router-dom";
import LogoPdf from "/img/FORMATO-REPORTES_1.jpg";
export function Main() {
  return (
    <div className="content_contenido-principal">
      <main>
        <div className="content_info">
          <div className="content_titulo">
            <h1>Reporte de informe técnico</h1>
          </div>
          <div className="content_parrafo">
            <p>
              Aquí podras descargar el reporte correspondiente sobre la
              instalación de las bombas de agua en su edificio, con el objetivo
              de que usted tenga una constancia sobre la correcta instalación de
              las bombas y que todo marcha a la perfección.
            </p>
          </div>
        </div>
        <div className="content_descargar-pdf">
          <div className="content_boton">
            <Link>
              <button>
                Descarga tu <br /> reporte aquí{" "}
              </button>
            </Link>
          </div>
          <div className="content_img-pdf">
            <div className="content_img">
              <div className="content_small-img">
                <img src={LogoPdf} className="small_img" />
              </div>
              <img src={LogoPdf} className="big_img" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
