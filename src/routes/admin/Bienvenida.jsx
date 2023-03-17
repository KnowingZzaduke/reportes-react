import Humans from "/img/humans.png";
import { FaUsers } from "react-icons/fa";
export function Bienvenida() {
  return (
    <div className="content_bienvenida">
      <div className="content_info">
        <h1>Bienvenida</h1>
        <p>
          Mediante este panel podrás agregar los reportes a los diferentes
          usuarios
        </p>
        <FaUsers />
      </div>
      <div className="content_img">
        <img src={Humans} />
      </div>
    </div>
  );
}
