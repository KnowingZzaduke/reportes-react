import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Logo from "/img/Dysam.jpg";
import { useNavigate } from "react-router-dom";
export function Signin() {
  const { infoUsuario } = useContext(DataContext);
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    for (let i = 0; i < infoUsuario.length; i++) {
      const valores = infoUsuario[i];

      if (valores.usuario === usuario && valores.contraseña === contraseña) {
        navigate("/usuarios");
      } else {
        if (
          usuario === "" ||
          contraseña === "" ||
          valores.usuario !== usuario ||
          valores.contraseña !== contraseña
        ) {
          Swal.fire({
            title: "Error",
            text: "Los datos ingresados no son válidos",
            icon: "error",
          });
          setUsuario("");
          setContraseña("");
        }
      }
    }
  }

  return (
    <div className="content_formulario">
      <form onSubmit={handleSubmit}>
        <div className="content_all-form">
          <div className="content_logo">
            <img src={Logo} />
          </div>
          <fieldset>
            <div className="content_input">
              <label>Usuario</label>
              <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="content_input">
              <label>Contraseña</label>
              <input
                type="password"
                placeholder="Contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="content_boton">
            <button>Enviar</button>
          </div>
        </div>
      </form>
    </div>
  );
}
