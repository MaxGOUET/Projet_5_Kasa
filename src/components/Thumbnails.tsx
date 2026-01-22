import { NavLink } from "react-router";
import "../styles/Thumbnails.scss";

function Thumbnails({
  imgSrc,
  title,
  logementId,
}: {
  imgSrc: string;
  title: string;
  logementId: string;
}) {
  return (
    <NavLink to={`/logement/${logementId}`}>
      <div className="thumbnail">
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
      </div>
    </NavLink>
  );
}
export default Thumbnails;
