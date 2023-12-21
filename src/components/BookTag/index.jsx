import "./BookTag.css";
import { GoTag } from "react-icons/go";
import { PTag } from "../PText";

const BookTag = ({ tags }) => {
  return (
    <div className="flex">
      <div className="tagicon mt-2">
        <GoTag />
      </div>
      <PTag tags={tags} />
    </div>
  );
};

export default BookTag;
