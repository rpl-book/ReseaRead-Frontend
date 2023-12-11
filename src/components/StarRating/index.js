import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import "./StarRating.css";

const StarRating = () => {
  return (
    <div className="tp-rating">
      <FaStar className="mr-1" />
      <FaStar className="mr-1" />
      <FaStar className="mr-1" />
      <FaStar className="mr-1" />
      <FaStarHalfAlt />
    </div>
  );
};

export default StarRating;
