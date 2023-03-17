import Animation from "/video/animation.mp4";
import { FaUsers } from "react-icons/fa";
export function Bienvenida() {
  return (
    <div className="content_bienvenida">
      <div className="content_info">
        <h1>Bienvenido/a</h1>
        <p>
          Mediante este panel podrás agregar los reportes a los diferentes
          usuarios
        </p>
        <FaUsers />
      </div>
      <div className="content_animacion">
        <video src={Animation} autoPlay muted loop/>
      </div>
    </div>
  );
}
