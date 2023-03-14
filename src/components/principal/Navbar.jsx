import { FaBars, FaUserCheck, FaInfoCircle, FaPhone } from "react-icons/fa";
import { useState } from "react";
import Logo from "/img/Dysam.jpg";
import { Link } from "react-router-dom";
export function Navbar() {
  const [active, setActive] = useState(false);
  function handleClick() {
    setActive(!active);
  }
  return (
    <div className="content_navbar">
      <nav className="navbar">
        <div className="content_logo">
          <img src={Logo} className="logo"></img>
        </div>
        <div
          className={`content_enlaces-n ${active ? "content_enlaces-d" : ""}`}
        >
          <ul>
            <li>
              <FaUserCheck />
              <Link to="/signin" target="_blank">Iniciar sesión</Link>
            </li>
            <li>
              <FaInfoCircle />
              <a>Sobre nosotros</a>
            </li>
            <li>
              <FaPhone />
              <a>Contacto</a>
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
