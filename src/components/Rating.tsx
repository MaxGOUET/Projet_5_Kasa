import emptyStarImg from "../assets/empty_star.svg";
import filledStarImg from "../assets/fill_star.svg";
import "../styles/Rating.scss";
function Rating({ rating }: { rating: string }) {
  const totalStars = 5;
  const filledStars = parseInt(rating);
  const emptyStars = totalStars - filledStars;
  return (
    <div className="ratingContainer">
      {[...Array(filledStars)].map((_, index) => (
        <img
          key={index}
          src={filledStarImg}
          alt="filled star"
          className="star"
        />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <img key={index} src={emptyStarImg} alt="empty star" className="star" />
      ))}
    </div>
  );
}

export default Rating;
