import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Logo from "/img/Dysam.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaUserShield, FaRegPaperPlane } from "react-icons/fa";
export function Signup() {
  const { infoUsuario } = useContext(DataContext);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  console.log(user);
  console.log(password);
  console.log(email);

  function handleSubmit(e) {
    e.preventDefault();
    if (user === "" || password === "" || email === "") {
      Swal.fire({
        title: "Error",
        text: "Los datos ingresados no son válidos",
        icon: "error",
      });
    } else if (
      user.length < 6 ||
      password.length < 6 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setError(!error)
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      //Verificar si existe en la base de datos
      const userExists = infoUsuario.some((info) => info.usuario === user);
      const emailExists = infoUsuario.some((info) => info.correo === email);
      if (!userExists && !emailExists) {
        alert("Usuario creado correctamente");
      } else {
        alert("Uno de los campos ya está registrado");
      }
    }
  }
  return (
    <div className="content_formulario-registro">
      <form onSubmit={handleSubmit}>
        <div className="content_all-form">
          <div className="content_logo">
            <img src={Logo} />
          </div>
          <fieldset>
            <div className="content_input">
              <label>
                Usuario
                <FaUserAlt />
              </label>
              <input
                type="text"
                title="Tu usuario debe tener 6 o más caracteres"
                placeholder="Usuario"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="content_input">
              <label>
                Contraseña
                <FaUserShield />
              </label>
              <input
                type="password"
                placeholder="Contraseña"
                title="Tu contraseña debe tener 6 o más caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="content_input">
              <label>
                Correo electrónico
                <FaRegPaperPlane />
              </label>
              <input
                type="email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </fieldset>
          <div className="content_registro">
            <Link to="/signin">Tienes cuenta?</Link>
          </div>
          <div className="content_boton">
            <button>Enviar</button>
          </div>
          <div className={`content_error-n ${error ? "content_error-d" : ""}`}>
            <p>Por favor ingresa datos válidos</p>
          </div>
        </div>
      </form>
    </div>
  );
}
