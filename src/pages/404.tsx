import { NavLink } from "react-router";
import "../styles/404.scss";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/">Retourner sur la page d'accueil</NavLink>
    </div>
  );
}
export default ErrorPage;
