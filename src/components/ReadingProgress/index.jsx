import "./ReadingProgress.css";
import { PPage } from "../PText";

const ReadingProgress = ({ currentPage, totalPage }) => {
  const progressPercentage = (currentPage / totalPage) * 50;

  return (
    <div>
      <div className="progress-base"></div>
      <div
        className="progress"
        style={{ width: `${progressPercentage}%` }}
      ></div>
      <div className="mt-6">
        <PPage currentPage={currentPage} totalPage={totalPage} />
      </div>
    </div>
  );
};

export default ReadingProgress;
