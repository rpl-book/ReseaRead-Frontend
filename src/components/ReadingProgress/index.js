import "./ReadingProgress.css";
import { PPage } from "../PText";

const ReadingProgress = ({currentPage, totalPage}) => {
  return (
    <div>
      <div className="progress-base"></div>
      <div className="progress"></div>
      <div className="mt-6">
        <PPage currentPage={currentPage} totalPage={totalPage} />
      </div>
    </div>
  );
};

export default ReadingProgress;
