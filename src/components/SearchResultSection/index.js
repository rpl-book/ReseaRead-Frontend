import SearchResultCard from "../SearchResultCard";


const searchResultSection = () => {
  return (
    <div>
        <SearchResultCard 
            bookImg={"/sr-book1.jpg"} rate={"3.5"} 
            bookTitle={"Bright Young Women"}  linktobook={"#"}
            bookAuthor={"Jessica Knoll"} linktoauthor={"#"}
            tag1={"Fiction"} route1={"#"} tag2={"Thriller"}route2={"#"}
            tag3={"Psychological"} route3={"#"} tag4={"Suspense"} route4={"#"}
        />
    </div>
  );
};

export default searchResultSection;
