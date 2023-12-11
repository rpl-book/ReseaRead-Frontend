import "./TopPicksCard.css";
import { PSTitle, PSAuthor, PRate } from "../PText";
import StarRating from "../StarRating";
import BookTag from "../BookTag";

const TopPicks = ({
  bookTitle,
  bookAuthor,
  bookRating,
  bookImg,
  linktobook,
  linktoauthor,
  tag1,
  route1,
  tag2,
  route2,
  tag3,
  route3,
  tag4,
  route4,
  tag5,
  route5,
}) => {
  return (
    <div className="tp-catalog">
      <div className="tp-img">
        <img src={bookImg} />
      </div>
      <div className="tp-info">
        <div className="mt-6">
          <PSTitle bookTitle={bookTitle} linktobook={linktobook} />
          <PSAuthor bookAuthor={bookAuthor} linktoauthor={linktoauthor} />
        </div>
        <div className="flex">
          <StarRating />
          <div className="ml-3 mt-3">
            <PRate rate={bookRating} />
          </div>
        </div>
        <div>
          <BookTag
            tag1={tag1}
            route1={route1}
            tag2={tag2}
            route2={route2}
            tag3={tag3}
            route3={route3}
            tag4={tag4}
            route4={route4}
            tag5={tag5}
            route5={route5}
          />
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
