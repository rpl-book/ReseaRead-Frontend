import "./NewReadingList.css";

const NewReadingList = ({ readingListName, onUpdateTable }) => {
  return (
    <div className="lib-readinglist">
      <p>
        <a href={"#"} onClick={() => onUpdateTable(readingListName)}>
          {readingListName}
        </a>
      </p>
    </div>
  );
};

export default NewReadingList;
