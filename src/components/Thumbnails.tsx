import "../styles/Thumbnails.scss";

function Thumbnails({ imgSrc, title }: { imgSrc: string; title: string }) {
  return (
    <div className="thumbnail">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
export default Thumbnails;
