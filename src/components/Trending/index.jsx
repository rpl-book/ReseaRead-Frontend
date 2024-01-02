"use client";
import "./style.css";
import { BsTag } from "react-icons/bs";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalLoading from "@/components/LoadingSpinner";
import StarRating from "../StarRating";
import { useRouter } from "next/navigation";
import BookTag from "../BookTag";

const Trending = ({ API_URL }) => {
  const [trendingBook, setTrendingBook] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTrendingBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/book/books/sized/`, {
          params: {
            page: 1,
            pageSize: 5,
          },
        });
        const bookData = response.data.payload.bookData.map((book) => ({
          ...book,
          genre: book.genre.split(", ").map((tag) => tag.trim()),
        }));

        setTrendingBook(bookData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrendingBook();
  }, [API_URL, setTrendingBook]);
  return (
    <div>
      <div className="grid grid-cols-5 gap-10 grid-flow-row-dense">
        {trendingBook ? (
          trendingBook.map((book) => (
            <div key={book.bookId} className="flex flex-col ">
              <div className="mt-4 relative h-[292px] rounded-xl">
                <img
                  className="rounded-xl cursor-pointer"
                  src={book.coverImage}
                  alt={book.title}
                  fill="true"
                  objectfit="cover"
                  onClick={() => router.push(`/book/${book.bookId}`)}
                />
              </div>
              <div
                className="mt-4 h-1/6 text-xl font-bold cursor-pointer"
                onClick={() => router.push(`/book/${book.bookId}`)}
              >
                {book.title}
              </div>
              <div className="mt-2 text-base" style={{ color: "#da5e42" }}>
                {book.author}
              </div>
              <div className="mt-2 flex items-center justify-between text-sm font-bold">
                <div className="flex">
                  <StarRating rate={book.rating} />
                </div>
                <div>{book.rating}</div>
              </div>
              <div className="mt-2 text-sm flex items-center space-x-4 text-customColorGray">
                <BookTag
                  tags={book.genre.map((tag) => ({
                    name: tag,
                    route: `#${tag}`,
                  }))}
                />
              </div>
            </div>
          ))
        ) : (
          <ModalLoading />
        )}
      </div>
      {/* <div className="flex justify-center m-8">
        <Button buttonName="See More" size="20" color="white" targetPage="#" />
      </div>*/}
    </div>
  );
};

export default Trending;
