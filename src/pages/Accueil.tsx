import App from "../components/App.tsx";
import Banner from "../components/Banner.tsx";
import bannerImage from "../assets/banner_plage.png";
import "../styles/Accueil.scss";
function Accueil() {
  return (
    <div className="accueil">
      <Banner
        backgroundImage={bannerImage}
        title="Chez nous, partout et ailleurs"
      />
      <App />
    </div>
  );
}

export default Accueil;
