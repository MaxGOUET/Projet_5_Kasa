import { NavLink } from "react-router";
import logoHeader from "../assets/logo_Kasa.svg";
import "../styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logoHeader} alt="Kasa Logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/apropos">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
