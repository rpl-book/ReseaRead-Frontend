import "./TopPicksCard.css";
import { PSTitle, PSAuthor, PRate } from "../PText";
import StarRating from "../StarRating";
import BookTag from "../BookTag";

const TopPicksCard = ({
  bookId,
  authorProfile,
  bookTitle,
  bookAuthor,
  bookRating,
  bookImg,
  genres,
}) => {
  return (
    <div className="tp-catalog">
      <div className="tp-img">
        <img src={bookImg} />
      </div>
      <div className="tp-info">
        <div className="mt-6">
          <PSTitle bookTitle={bookTitle} linkToBook={bookId} />
          <PSAuthor bookAuthor={bookAuthor} linkToAuthor={authorProfile} />
        </div>
        <div className="flex">
          <StarRating rate={bookRating} />
        </div>
        <div>
          {genres && (
            <BookTag
              tags={genres.map((tag) => ({
                name: tag,
                route: `#${tag}`,
              }))}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopPicksCard;
