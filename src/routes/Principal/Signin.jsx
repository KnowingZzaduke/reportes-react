import { Link } from "react-router-dom";
import Logo from "/img/Dysam.jpg";
export function Signin() {
  return (
    <div className="content_formulario">
      <form>
        <div className="content_logo">
          <img src={Logo} />
        </div>
        <fieldset>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
        </fieldset>
        <div className="content_boton">
          <Link>
            <button>Enviar</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
