import { Outlet } from "react-router-dom/dist";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { functions as fc } from "../../data/request";
import Cookies from "js-cookie";
import { DataContext } from "../../context/DataContext";

export function HOC({ children }) {
  const { validateSession } = useContext(DataContext);
  const navigate = useNavigate();
  useEffect(() => {
    const SESSION = Cookies.get("dyzam-app");
    if (SESSION == undefined) {
      navigate("/signin");
    } else {
      const SESSIONDECRYPT = fc.decryptdata(SESSION);
      if (validateSession()) {
        if (SESSIONDECRYPT.level === 0) {
          navigate("/administradores");
        } else if (SESSIONDECRYPT.level === 1) {
          navigate("/usuarios");
        } else {
          if (SESSIONDECRYPT.user == null) {
            Swal.fire({
              title: "Error",
              text: "Permisos Denegados",
              icon: "error",
            });
            Cookies.remove("dyzam-app");
            navigate("/signin");
          }
        }
      }
    }
  }, []);
  return children ? children : <Outlet />;
}
