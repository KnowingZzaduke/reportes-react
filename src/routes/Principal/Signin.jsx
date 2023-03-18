import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Logo from "/img/Dysam.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaUserShield, FaRegPaperPlane } from "react-icons/fa";
export function Signin() {
  const { infoUsuario, datoUsuario } = useContext(DataContext);
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
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
      const usuarioEncontrado = infoUsuario.find((e) => e.correo === usuario && e.contraseña === contraseña);
      if(!usuarioEncontrado){
        setError(!error);
        setTimeout(() =>{
          setError(false)
        }, 2000);
        return
      }
      if(usuarioEncontrado.correo.includes("@admin")){
        navigate("/administradores/bienvenida");
      }else{
        navigate("/usuarios/")
      }
    }
  }

  return (
    <div className="content_formulario-ingreso">
      <form onSubmit={handleSubmit}>
        <div className="content_all-form">
          <div className="content_logo">
            <img src={Logo} />
          </div>
          <fieldset>
            <div className="content_input">
              <label>Usuario
              <FaUserAlt/>
              </label>
              <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>
            <div className="content_input">
              <label>Contraseña
              <FaUserShield/>
              </label>
              <input
                type="password"
                placeholder="Contraseña"
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
            <p>Usuario o contraseña incorrectos</p>
          </div>
        </div>
      </form>
    </div>
  );
}
