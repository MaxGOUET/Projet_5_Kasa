import logements from "../datas/logements.json";
import Thumbnails from "../components/Thumbnails";
import Banner from "../components/Banner.tsx";
import bannerImage from "../assets/banner_plage.png";
import "../styles/Accueil.scss";
function Accueil() {
  return (
    <div className="accueil">
      <Banner
        backgroundImage={bannerImage}
        title={
          <>
            Chez nous,
            <wbr /> partout et ailleurs
          </>
        }
      />
      <div className="thumbnails_container">
        {logements.map((logement) => (
          <Thumbnails
            key={logement.id}
            logementId={logement.id}
            imgSrc={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Accueil;
