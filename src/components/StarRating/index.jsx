import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "./StarRating.css";

const StarRating = ({ rate }) => {
  const wholeStar = Math.floor(rate);
  const halfStar = rate - wholeStar;

  const wholeStarArray = Array.from({ length: wholeStar }, (_, i) => (
    <FaStar key={i} />
  ));

  const useHalfStar = halfStar >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />;
  return (
    <div className="tp-rating">
      {wholeStarArray}
      {useHalfStar}
    </div>
  );
};

export default StarRating;
