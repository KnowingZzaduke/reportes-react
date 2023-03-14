import { useRouteError } from "react-router-dom";
export function Error() {
  const error = useRouteError();
  return (
    <div className="content_error">
      <div className="error">
        <h1>Oops!</h1>
        <p>Ha ocurrido un error inesperado</p>
        <span>{error.status || error.message}</span>
      </div>
    </div>
  );
}
