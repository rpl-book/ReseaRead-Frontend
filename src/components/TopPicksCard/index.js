import "./TopPicksCard.css";
import Button from "../Button";
import { PSTitle, PSAuthor, PPage, PRate } from "../PText";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const TopPicks = ({bookTitle, bookAuthor, bookRating, bookImg}) => {
  return (
    <div className="tp-catalog">
      <div className="tp-img">
        <img src={bookImg}/>
      </div>

      <div className="tp-info">
        <div className="mt-6">
          <PSTitle bookTitle={bookTitle}/>
          <PSAuthor bookAuthor={bookAuthor}/>
        </div>

        <div className="tp-rating">
          <FaStar className="mr-1"/>
          <FaStar className="mr-1"/>
          <FaStar className="mr-1"/>
          <FaStar className="mr-1"/>
          <FaStarHalfAlt />
          <div className="ml-2"><PRate rate={bookRating}/></div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
