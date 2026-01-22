import logoHeader from "../assets/logo_Kasa.png";
import "../styles/Header.scss";

function Header() {
  return (
    <header className="header">
      <img src={logoHeader} alt="Kasa Logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/apropos">A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
