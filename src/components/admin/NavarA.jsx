import {
  FaBars,
  FaUserCog,
  FaAngleDown,
  FaAngleUp,
  FaWindowClose,
  FaFileMedical,
  FaTrashAlt,
  FaGlobe,
  FaPowerOff,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export function NavbarA() {
  const [menu, setMenu] = useState(false);
  const [op, setOp] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    setMenu(!menu);
  }
  function mostrarOp() {
    setOp(!op);
  }

  function closeSession() {
    Cookies.remove("dyzam-app");
    navigate("/signin");
  }
  return (
    <div className="content_navbar-a">
      <nav className="navbar">
        <div className="content_navbar-superior">
          <div className="navbar_left">
            <FaBars onClick={handleClick} />
          </div>
          <div className="navbar_right">
            <div className="content_option-admin">
              <div className="content_usuario">
                <FaUserCog />
              </div>
              <div className="opciones">
                <div className="content_toggles-caret">
                  <FaAngleDown
                    className={`caret_down-d ${op ? "caret_down-n" : ""}`}
                    onClick={mostrarOp}
                  />
                  <FaAngleUp
                    className={`caret_up-n ${op ? "caret_up-d" : ""}`}
                    onClick={mostrarOp}
                  />
                </div>
                <div
                  className={`content_cerrar-sesion-n ${
                    op ? "content_cerrar-sesion-d" : ""
                  }`}
                >
                  <button onClick={closeSession}>
                    <FaPowerOff />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`content_navbar-desplegable-n ${
            menu ? "content_navbar-desplegable-d" : ""
          }`}
        >
          <div className="content_cerrar">
            <p>Cerrar</p>
            <FaWindowClose onClick={handleClick} />
          </div>
          <div className="content_enlaces">
            <ul>
              <li>
                <Link to="/administradores/agregar-reportes">
                  <FaFileMedical />
                  Agregar reportes
                </Link>
              </li>
              <li>
                <Link to="/administradores/eliminar-reportes">
                  <FaTrashAlt />
                  Eliminar reportes
                </Link>
              </li>
              <li>
                <Link to="/administradores/detalles-reportes">
                  <FaGlobe />
                  Detalles reportes
                </Link>
              </li>
              <li>
                <Link to="/administradores/formulario-email">
                  <FiMail />
                  Correo reportes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
