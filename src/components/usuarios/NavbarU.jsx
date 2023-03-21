import { useState } from "react";
import Logo from "/img/Dysam.jpg";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaUserCog,
  FaPowerOff,
  FaRegSun
} from "react-icons/fa";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export function NavbarU() {
  const [active, setActive] = useState(false);
  const [config, setConfig] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    setActive(!active);
  }
  function configClick() {
    setConfig(!config);
  }
  function closeSession() {
    Cookies.remove("dyzam-app");
    navigate("/signin");
  }
  return (
    <div className="content_navbar-u">
      <nav className="navbar">
        <div className="content_logo">
          <img src={Logo} className="logo" />
        </div>
        <div
          className={`content_enlaces-n ${active ? "content_enlaces-d" : ""}`}
        >
          <ul>
            <li className="enlace_opciones">
              <div className="info_usuario" onClick={configClick}>
                <a>
                  <FaUserCog />
                  <p>Usuario</p>
                </a>
              </div>
              <div
                className={`content_opciones-n ${
                  config ? "content_opciones-d" : ""
                }`}
              >
                <ul>
                  <li>
                    <FaRegSun />
                    <Link>Configuración</Link>
                  </li>
                  <li>
                    <FaPowerOff />
                    <button onClick={closeSession}>Cerrar sesión</button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="content_toggle-abrir">
          <FaBars onClick={handleClick} />
        </div>
      </nav>
    </div>
  );
}
