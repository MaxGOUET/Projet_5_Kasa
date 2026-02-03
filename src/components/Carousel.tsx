import "../styles/Carousel.scss";
import leftArrow from "../assets/arrow_left.svg";
import rightArrow from "../assets/arrow_right.svg";
import { useMemo, useState } from "react";

function Carousel({ pictures }: { pictures: string[] }) {
  const largeur = document.querySelector(".pictures")?.clientWidth || 1240;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionTime, setTransitionTime] = useState(0.5);

  // On crée un tableau interne sans modifier les props
  const extendedPictures = useMemo(() => {
    if (pictures.length <= 1) return pictures;

    return [pictures[pictures.length - 1], ...pictures, pictures[0]];
  }, [pictures]);

  function previousIndex() {
    if (currentIndex === 1) {
      setCurrentIndex(0);
      setTimeout(() => {
        setTransitionTime(0);
        setCurrentIndex(extendedPictures.length - 2);
        setTimeout(() => setTransitionTime(0.5), 20);
      }, 500);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  }

  function nextIndex() {
    if (currentIndex === extendedPictures.length - 2) {
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => {
        setTransitionTime(0);
        setCurrentIndex(1);
        setTimeout(() => setTransitionTime(0.5), 20);
      }, 500);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div className="carouselContainer">
      {pictures.length > 1 && (
        <>
          <img src={leftArrow} className="leftArrow" onClick={previousIndex} />
          <img src={rightArrow} className="rightArrow" onClick={nextIndex} />
          <p>
            {currentIndex === 0
              ? pictures.length
              : currentIndex === extendedPictures.length - 1
                ? 1
                : currentIndex}
            / {pictures.length}
          </p>
        </>
      )}

      <div
        className="pictures"
        style={{
          transform: `translateX(${-largeur * currentIndex}px)`,
          transition: `transform ${transitionTime}s`,
        }}
      >
        {extendedPictures.map((picture, index) => (
          <div key={index} className="pictureItem">
            <img src={picture} alt={`image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
