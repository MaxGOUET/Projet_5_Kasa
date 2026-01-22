import logements from "../datas/logements.json";
import Thumbnails from "./Thumbnails";
import "../styles/Thumbnails_container.scss";

function App() {
  return (
    <div className="thumbnails_container">
      {logements.map((logement) => (
        <Thumbnails
          key={logement.id}
          imgSrc={logement.cover}
          title={logement.title}
        />
      ))}
    </div>
  );
}

export default App;
