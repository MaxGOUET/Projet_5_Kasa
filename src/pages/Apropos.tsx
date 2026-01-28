import bannerImage from "../assets/banner_montagne.png";
import Banner from "../components/Banner.tsx";
import Collapsible from "../components/Collapsible.tsx";
import "../styles/Apropos.scss";

function Apropos() {
  return (
    <div className="apropos">
      <Banner backgroundImage={bannerImage} />
      <Collapsible title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les
        photos sont conformes aux logements, et toutes les informations sont
        régulièrement vérifiées par nos équipes.
      </Collapsible>
      <Collapsible title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
        comportement discriminatoire ou de perturbation du voisinage entraînera
        une exclusion de notre plateforme.
      </Collapsible>
      <Collapsible title="Service">
        Nos équipes se tiennent à votre disposition pour vous fournir une
        expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.
      </Collapsible>
      <Collapsible title="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour
        les voyageurs, chaque logement correspond aux critères de sécurité
        établis par nos services. En laissant une note aussi bien à l'hôte qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont
        bien respectés. Nous organisons également des ateliers sur la sécurité
        domestique pour nos hôtes.
      </Collapsible>
    </div>
  );
}
export default Apropos;
