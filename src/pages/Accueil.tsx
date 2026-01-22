import App from "../components/App.tsx";
import Banner from "../components/banner.tsx";
import bannerImage from "../assets/banner_plage.png";

function Accueil() {
  return (
    <>
      <Banner backgroundImage={bannerImage} />
      <App />
    </>
  );
}

export default Accueil;
