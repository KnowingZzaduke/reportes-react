import Logo from "/img/Dysam.jpg";
export function Footer() {
  return (
    <div className="content_footer">
      <footer>
        <div className="content_logo">
          <img src={Logo} />
        </div>
        <div className="content_enlaces">
          <ul>
            <li>
              <a>Sobre nosotros</a>
            </li>
            <li>
              <a>Contactanos</a>
            </li>
            <li>
              <a>Términos y condiciones</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
