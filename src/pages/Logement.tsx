import Tags from "../components/Tags";
import logements from "../datas/logements.json";
import Carousel from "../components/Carousel";
import { useParams } from "react-router";
import "../styles/Logement.scss";

interface LogementType {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

function Logement() {
  const { id } = useParams();
  const logement: LogementType | undefined = logements.find(
    (logement) => logement.id === id,
  );
  if (!logement) {
    return null;
  }
  return (
    <>
      <Carousel pictures={logement.pictures} />
      <div className="logementInfos">
        <div className="logementContainer">
          <div className="titleContainer">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </div>
          <div className="tagsContainer">
            <Tags tags={logement.tags} />
          </div>
        </div>
        <div className="hostInfos">
          <div className="hostContainer">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Logement;
