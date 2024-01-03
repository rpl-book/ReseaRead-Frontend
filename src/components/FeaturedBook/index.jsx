"use client";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import "./FeaturedBook.css";
import Button from "../Button";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

const FeaturedBook = ({ API_URL }) => {
  const [randomBook, setRandomBook] = useState(null);

  useEffect(() => {
    const fetchRandomBook = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/book/books`);
        const bookData = response.data.payload.bookData;
        const randomIndex = Math.floor(Math.random() * bookData.length);
        const selectedBook = bookData[randomIndex];

        setRandomBook(selectedBook);
      } catch (err) {
        console.error("Error fetching random book:", err.message);
      }
    };

    fetchRandomBook();
  }, [API_URL]);

  return (
    <div>
      {randomBook ? (
        <>
          <div className="featured-wrap">
            <div className="banner-img-accent">
              <img src="/banner-accent.png" alt=""></img>
            </div>

            <Link
              className="featured-title font"
              href={`/book/${randomBook.bookId}`}
            >
              {randomBook.title}
            </Link>
          </div>

          <div className="banner flex flex-row items-center px-10 gap-8">
            <img
              className="featured-img"
              src={randomBook.coverImage}
              width={230}
              height={230}
              alt={randomBook.title}
              onError={(e) => {
                e.target.src = "../placeholder/coverPlaceholder.png";
              }}
            />
            <div>
              <h2 className="featured-author font">{randomBook.author}</h2>
              <p className="featured-desc font">{randomBook.description}</p>
              <div className="button-want-to-read">
                <Button
                  buttonName="Want To Read"
                  size="20"
                  color="white"
                  targetPage={`/book/${randomBook.bookId}`}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FeaturedBook;
