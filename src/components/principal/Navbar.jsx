import Logo from '/img/Dysam.jpg';
export function Navbar() {
  return (
    <div className="content_navbar">
      <nav className="navbar">
      <div className="content_logo">
        <img src={Logo} className='logo'>
        </img>
      </div>
        <div className="content_enlaces">
          <ul>
            <li>
                <a>Iniciar sesión</a>
            </li>
            <li>
                <a>Sobre nosotros</a>
            </li>
            <li>
                <a>Contacto</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
