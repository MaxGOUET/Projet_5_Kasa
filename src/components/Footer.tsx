import logoFooter from "../assets/footer_logo_Kasa.png";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Kasa Logo footer" />
      <p>© 2024 KASA. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
