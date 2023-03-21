import Logo from "/img/Dysam.jpg";
export function Footer() {
  return (
    <div className="content_footer">
      <footer>
        <div className="content_logo">
          <img src={Logo} alt="Dysam"/>
        </div>
        <div className="content_enlaces">
          <ul>
            <li>
              <a>Términos y condiciones</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
