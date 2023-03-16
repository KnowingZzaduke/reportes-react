import { useState } from "react";
import Logo from "/img/Dysam.jpg";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaUserCog,
  FaPowerOff,
  FaRegSun,
  FaInfoCircle,
  FaPhone,
} from "react-icons/fa";
export function NavbarU() {
  const [active, setActive] = useState(false);
  const [config, setConfig] = useState(false);
  function handleClick() {
    setActive(!active);
  }

  function configClick() {
    setConfig(!config);
  }
  return (
    <div className="content_navbar-u">
      <nav className="navbar">
        <div className="content_logo">
          <img src={Logo} className="logo"/>
        </div>
        <div
          className={`content_enlaces-n ${active ? "content_enlaces-d" : ""}`}
        >
          <ul>
            <li>
              <FaInfoCircle />
              <a>Sobre nosotros</a>
            </li>
            <li>
              <FaPhone />
              <a>Contacto</a>
            </li>
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
                    <Link>Cerrar sesión</Link>
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
