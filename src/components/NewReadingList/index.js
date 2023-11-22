import "./NewReadingList.css";


const NewReadingList = ({readingListName, route}) => {
  return (
    <div className="lib-readinglist">
        <p><a href={route}>{readingListName}</a></p>
    </div>
  );
};

export default NewReadingList;
