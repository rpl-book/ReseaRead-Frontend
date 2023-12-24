import SearchResultCard from "../SearchResultCard";
import Pagination from "../Pagination";

const searchResultSection2 = () => {
  return (
    <div>
      <SearchResultCard
        bookImg={"/sr-book1.jpg"}
        rate={"3.5"}
        bookTitle={"Bright Young Women"}
        linktobook={"#"}
        bookAuthor={"Jessica Knoll"}
        linktoauthor={"#"}
        tag1={"Fiction"}
        route1={"#"}
        tag2={"Thriller"}
        route2={"#"}
        tag3={"Psychological"}
        route3={"#"}
        tag4={"Suspense"}
        route4={"#"}
      />

      <SearchResultCard
        bookImg={"/tp-book6.jpg"}
        rate={"3.5"}
        bookTitle={"Bright Young Things"}
        linktobook={"#"}
        bookAuthor={"Scarlett Thomas"}
        linktoauthor={"#"}
        tag1={"Fiction"}
        route1={"#"}
        tag2={"Thriller"}
        route2={"#"}
        tag3={"Mystery"}
        route3={"#"}
        tag4={"Suspense"}
        route4={"#"}
      />

      <SearchResultCard
        bookImg={"/tp-book7.jpg"}
        rate={"3.5"}
        bookTitle={"Star Bright"}
        linktobook={"#"}
        bookAuthor={"Staci Hart"}
        linktoauthor={"#"}
        tag1={"Fiction"}
        route1={"#"}
        tag2={"Romance"}
        route2={"#"}
        tag3={"Chicklit"}
        route3={"#"}
        tag4={"Contemporary"}
        route4={"#"}
      />

      <Pagination totalItems={120} itemsPerPage={3} />
    </div>
  );
};

export default searchResultSection2;
