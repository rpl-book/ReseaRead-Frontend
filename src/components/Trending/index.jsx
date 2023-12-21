"use client";
import Image from "next/image";
import "./style.css";
import { BsBell, BsGear } from "react-icons/bs";
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { BsTag } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from "axios";

const Trending = ({ API_URL }) => {
  const [trendingBook, setTrendingBook] = useState([]);

  useEffect(() => {
    const fetchTrendingBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/book/books/sized/`, {
          params: {
            page: 1,
            pageSize: 5,
          },
        });
        const bookData = response.data.payload.bookData;

        setTrendingBook(bookData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTrendingBook();
  }, [API_URL]);
  return (
    <div>
      <div className="grid grid-cols-5 gap-10 grid-flow-row-dense">
        {trendingBook ? (
          trendingBook.map((book) => (
            <div className="flex flex-col ">
              <div className="mt-4 relative h-[292px] rounded-xl">
                <img
                  className="rounded-xl"
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="mt-4 h-1/6 text-xl font-bold ">{book.title}</div>
              <div className="mt-2 text-base text-customColorOrange">
                {book.author}
              </div>
              <div className="mt-2 flex items-center justify-between text-sm font-bold">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, idx) =>
                    idx < Math.round(book.rating) ? (
                      <span className="text-customColorOrange">
                        <BsStarFill />
                      </span>
                    ) : (
                      <span className="text-customColorGray">
                        <BsStar />
                      </span>
                    )
                  )}
                </div>
                <div>{book.rating}</div>
              </div>
              <div className="mt-2 text-sm flex items-center space-x-4 text-customColorGray">
                <div>
                  <BsTag />
                </div>
                <div>{book.category}</div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="flex justify-center m-8">
        <Button buttonName="See More" size="20" color="white" targetPage="#" />
      </div>
    </div>
  );
};

export default Trending;