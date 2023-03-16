import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Logo from "/img/Dysam.jpg";
import { useNavigate } from "react-router-dom";
export function Signin() {
  const { infoUsuario, datoUsuario } = useContext(DataContext);
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (usuario === "" || contraseña === "") {
      Swal.fire({
        title: "Error",
        text: "Los datos ingresados no son válidos",
        icon: "error",
      });
      setUsuario("");
      setContraseña("");
    } else {
      datoUsuario(usuario, contraseña);
      infoUsuario.forEach((e) => {
        let usuarioData = e.usuario;
        let contraseñaData = e.contraseña;
        const usuarioArray = usuario.split(" ");
        const filterUsuario = usuarioArray.filter((user) => {
          if (
            user.includes("@usuario") &&
            user === usuarioData &&
            contraseña === contraseñaData
          ) {
            navigate("/usuarios");
          } else if (user.includes("@admin") && user === usuarioData) {
            navigate("/administradores");
          } else {
            setError(!error)
            setTimeout(() =>{
              setError(false)
            }, 2000)
          }
        });
      });
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
          <div className={`content_error-n ${error ? "content_error-d" : ""}`}>
            <p>Usuario o contraseña incorrectos</p>
          </div>
        </div>
      </form>
    </div>
  );
}
