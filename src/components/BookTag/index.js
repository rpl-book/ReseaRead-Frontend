import "./BookTag.css";
import { GoTag } from "react-icons/go";
import { PTag } from "../PText";

const BookTag = ({
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
    <div className="flex">
      <div className="tagicon mt-2">
        <GoTag />
      </div>
      <PTag
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
  );
};

export default BookTag;
