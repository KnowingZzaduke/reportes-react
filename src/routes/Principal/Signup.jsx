import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Logo from "/img/Dysam.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaUserAlt, FaUserShield, FaRegPaperPlane } from "react-icons/fa";
import { functions as fc } from "../../data/request";
export function Signup() {
  const { infoUsuario } = useContext(DataContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || password === "" || email === "") {
      Swal.fire({
        title: "Error",
        text: "Los datos ingresados no son válidos",
        icon: "error",
      });
    } else if (
      name.length < 6 ||
      password.length < 6 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setError(!error)
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      let data = await fc.signup(name,password,email);
      data = data.data;
      
      if(data.salida == "exito"){
        Swal.fire({
          title: "Exito",
          text: data.data,
          icon: "success",
        });
        navigate("/signin")
      }else{
        Swal.fire({
          title: "Error",
          text: data.data,
          icon: "error",
        });
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="content_input">
              <label>
                Contraseña
                <FaUserShield />
              </label>
              <input
                type="password"
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
