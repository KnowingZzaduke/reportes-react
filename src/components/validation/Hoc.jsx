import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const HOC = (Component) => {
  const AuthenticatedComponent = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      fc.validate()
        .then(function (data) {
          if (typeof data.data != "object") {
            data = JSON.parse(data.data);
          } else {
            data = data.data;
          }
          let isAuthenticated;
          if (data.salida == "exito") {
            isAuthenticated = true;
          } else {
            if (data.data == "Tiempo de inactividad exedido") {
              Swal.fire({
                title: "Error",
                text: "Tiempo de inactividad exedido, por favor inicie sesion nuevamente.",
                icon: "warning",
              });
            }
            isAuthenticated = false;
          }
          setIsAuthenticated(isAuthenticated);
          setIsLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setIsAuthenticated(false);
          setIsLoading(false);
        });
    }, [location]);

    if (
      !isAuthenticated &&
      Component.name != "Signin" &&
      Component.name != "Signup"
    ) {
      return <navigate to="/signin" />; // Si no está autenticado, redirige al usuario a la página de inicio de sesión
    } 
    return <Component {...props} />; // Si está autenticado, renderiza el componente original
  };
    return AuthenticatedComponent;

};
