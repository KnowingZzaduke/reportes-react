import { Link } from "react-router-dom";
import Logo from "/img/Dysam.jpg";
export function Signin() {
  return (
    <div className="content_formulario">
      <form>
        <div className="content_all-form">
          <div className="content_logo">
            <img src={Logo} />
          </div>
          <fieldset>
            <div className="content_input">
              <label>Usuario</label>
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="content_input">
              <label>Contraseña</label>
              <input type="password" placeholder="Contraseña" />
            </div>
          </fieldset>
          <div className="content_boton">
            <Link>
              <button>Enviar</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
