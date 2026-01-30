import "../styles/Carousel.scss";
import leftArrow from "../assets/arrow_left.svg";
import rightArrow from "../assets/arrow_right.svg";
import { useState } from "react";

function Carousel({ pictures }: { pictures: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toto] = useState(() => {
    pictures.unshift(pictures[pictures.length - 1]);
    pictures.push(pictures[1]);
  });
  function previousIndex() {
    setCurrentIndex(
      currentIndex - 1 >= 0 ? currentIndex - 1 : pictures.length - 1,
    );
  }
  function nextIndex() {
    setCurrentIndex(currentIndex + 1 < pictures.length ? currentIndex + 1 : 0);
  }
  return (
    <div className="carouselContainer">
      <img
        src={leftArrow}
        alt="left arrow"
        className="leftArrow"
        onClick={previousIndex}
      />
      <img
        src={rightArrow}
        alt="right arrow"
        className="rightArrow"
        onClick={nextIndex}
      />
      <div
        className="pictures"
        style={{ transform: `translateX(${-1240 * currentIndex}px)` }}
      >
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
