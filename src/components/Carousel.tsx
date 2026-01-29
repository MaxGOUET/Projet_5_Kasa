import "../styles/Carousel.scss";

function Carousel({ pictures }: { pictures: string[] }) {
  return (
    <div className="carouselContainer">
      {pictures.map((picture, index) => (
        <img key={index} src={picture} alt={`image ${index + 1}`} />
      ))}
    </div>
  );
}

export default Carousel;
