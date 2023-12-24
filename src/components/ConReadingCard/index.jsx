import "./ConReadingCard.css";
import { PTitle, PAuthor } from "../PText";
import ReadingProgress from "../ReadingProgress";

const ConReadingCard = ({
  bookId,
  bookTitle,
  bookAuthor,
  currentPage,
  totalPage,
  bookImg,
}) => {
  return (
    <div>
      <div className="cr-wrapper mt-7">
        <img className="cr-image" src={bookImg} />
        <div className="cr-content">
          <PTitle bookId={bookId} bookTitle={bookTitle} />
          <PAuthor bookAuthor={bookAuthor} />
          <ReadingProgress currentPage={currentPage} totalPage={totalPage} />
        </div>
      </div>
    </div>
  );
};

export default ConReadingCard;
