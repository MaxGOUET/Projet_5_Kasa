import "../styles/Carousel.scss";
import leftArrow from "../assets/arrow_left.svg";
import rightArrow from "../assets/arrow_right.svg";
import { useState } from "react";

function Carousel({ pictures }: { pictures: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="carouselContainer">
      <img
        src={leftArrow}
        alt="left arrow"
        className="leftArrow"
        onClick={() => setCurrentIndex(currentIndex - 1)}
      />
      <img
        src={rightArrow}
        alt="right arrow"
        className="rightArrow"
        onClick={() => setCurrentIndex(currentIndex + 1)}
      />
      <div className="pictures">
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
