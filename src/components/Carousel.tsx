import "../styles/Carousel.scss";
import leftArrow from "../assets/arrow_left.svg";
import rightArrow from "../assets/arrow_right.svg";
import { useState } from "react";
let firstTime = true;

function Carousel({ pictures }: { pictures: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(pictures.length > 1 ? 1 : 0);
  const [transitionTime, setTransitionTime] = useState(0.5);
  const [_] = useState(() => {
    if (!firstTime || pictures.length == 1) {
      return;
    }
    firstTime = false;
    pictures.unshift(pictures[pictures.length - 1]);
    pictures.push(pictures[1]);
  });

  function previousIndex() {
    if (currentIndex === 1) {
      setCurrentIndex(0);
      setTimeout(() => {
        setTransitionTime(0);
        setCurrentIndex(pictures.length - 2);
        setTimeout(() => {
          setTransitionTime(0.5);
        }, 20);
      }, 500);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  }
  function nextIndex() {
    if (currentIndex === pictures.length - 2) {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setTransitionTime(0);
        setCurrentIndex(1);
        setTimeout(() => {
          setTransitionTime(0.5);
        }, 20);
      }, 500);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }
  return (
    <div className="carouselContainer">
      {pictures.length > 1 && (
        <>
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
          <p>
            {currentIndex == 0
              ? pictures.length - 2
              : currentIndex == pictures.length - 1
                ? 1
                : currentIndex}{" "}
            / {pictures.length - 2}
          </p>
        </>
      )}

      <div
        className="pictures"
        style={{
          transform: `translateX(${-1240 * currentIndex}px)`,
          transition: `transform ${transitionTime}s`,
        }}
      >
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={`image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
