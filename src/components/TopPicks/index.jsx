import Button from "../Button";
import SubsectionText from "../SubsectionText";
import TopPicksCard from "../TopPicksCard";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalLoading from "@/components/LoadingSpinner";

const TopPicks = ({ API_URL }) => {
  const [topPicksBook, setTopPicksBook] = useState([]);

  useEffect(() => {
    const fetchTopPicksBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/book/books/rating/`, {
          params: {
            ratingRange: 4.1,
            limit: 4,
          },
        });
        const bookData = response.data.payload.bookData;

        setTopPicksBook(bookData);
      } catch (err) {
        console.error("Error fetching top picks book:", err.message);
      }
    };
    fetchTopPicksBook();
  }, [API_URL]);

  return (
    <div>
      <div className="mt-20 mb-10">
        <SubsectionText title="Top Picks For You" />
      </div>

      <div className="grid grid-cols-4 ml-0">
        {topPicksBook ? (
          topPicksBook.map((book) => (
            <TopPicksCard
              key={book.bookId}
              bookAuthor={book.author}
              bookImg={book.coverImage}
              bookTitle={book.title}
              bookId={book.bookId}
              authorProfile={book.author}
              genres={book.genre.split(",").map((genre) => genre.trim())}
              bookRating={book.rating}
            />
          ))
        ) : (
          <ModalLoading />
        )}
      </div>

      <div className="flex justify-center items-center mt-10 mb-10">
        <Button buttonName="See More" size="20" color="white" targetPage="/" />
      </div>
    </div>
  );
};

export default TopPicks;
