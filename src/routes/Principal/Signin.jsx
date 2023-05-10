import Swal from "sweetalert2";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import Logo from "/img/Dysam.jpg";
import { functions as fc } from "../../data/request";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield, FaRegPaperPlane } from "react-icons/fa";

export function Signin() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (usuario === "" || contraseña === "") {
      setError(!error);
      setUsuario("");
      setContraseña("");
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      let data = await fc.login(usuario, contraseña);
      data = data.data;
      if (data.salida == "error") {
        Swal.fire({
          title: "Error",
          text: data.data,
          icon: "error",
        });
      } else if (data.salida == "exito") {
        if (data.user == null || data.iduser == null || data.level == null) {
          Swal.fire({
            title: "Error",
            text: "Error de aplicacion por favor comunicate con el Programador",
            icon: "error",
          });
        } else {
          let decrytData = {
            user: data.user,
            level: data.level,
            iduser: data.iduser,
          };
          let cookkieD = fc.encryptData(decrytData);
          Cookies.set("dyzam-app", cookkieD, {
            SameSite: "none",
            secure: true,
          });

          if (data.level === 0) {
            navigate("/administradores/bienvenida");
          } else {
            navigate("/usuarios");
          }
        }
      }
    }
  };

  return (
    <div className="content_formulario-ingreso">
      <form onSubmit={handleSubmit}>
        <div className="content_all-form">
          <div className="content_logo">
            <img src={Logo} />
          </div>
          <fieldset>
            <div className="content_input">
              <label>
                Correo
                <FaRegPaperPlane />
              </label>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="content_input">
              <label>
                Contraseña
                <FaUserShield />
              </label>
              <input
                type="password"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="content_registro">
            <Link to="/signup">No tienes cuenta?</Link>
          </div>
          <div className="content_boton">
            <button>Enviar</button>
          </div>
          <div className={`content_error-n ${error ? "content_error-d" : ""}`}>
            <p>Los campos no pueden ir vacíos</p>
          </div>
        </div>
      </form>
    </div>
  );
}
