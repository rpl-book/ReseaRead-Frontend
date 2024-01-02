import "./BookTag.css";
import { BsTag } from "react-icons/bs";
import { PTag } from "../PText";

const BookTag = ({ tags }) => {
  return (
    <div className="flex">
      <div className="tagicon mt-2">
        <BsTag />
      </div>
      <PTag tags={tags} />
    </div>
  );
};

export default BookTag;
