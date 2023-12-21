"use client";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";
import BookDetail from "@/components/BookDetail";
import axios from "axios";
import { decodeTokenAndSetUserId } from "@/app/utils/decodeTokenAndSetUserId";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Book = ({ params }) => {
  const [userId, setUserId] = useState(null);
  const [bookPage, setBookPage] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchBookById = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/api/book/${params.bookId}`
        );
        const bookData = response.data.payload;

        setBookPage(bookData);
      } catch (err) {
        console.error("Error fetching a book", err.message);
      }
    };

    const fetchUserInfo = async () => {
      const decodedUserId = await decodeTokenAndSetUserId();

      if (decodedUserId) {
        setUserId(decodedUserId);
      } else {
        router.push("/login");
      }
    };

    fetchBookById();
    fetchUserInfo();
  }, [API_URL, userId]);

  return (
    <main className="mt-8 container mx-auto max-w-screen-lg">
      <div className="w-full">
        <div className="font-bold flex items-center space-x-4 pt-2 pb-2 text-customDefaultText text-2xl w-full border-b-2">
          <button
            onClick={() => {
              router.push("/homepage");
            }}
          >
            <BsArrowLeft />
          </button>
          <div className="cursor-pointer">Book Details</div>
        </div>
      </div>
      <div className="mt-4">
        {bookPage && userId && (
          <BookDetail data={bookPage} userId={userId} API_URL={API_URL} />
        )}
      </div>
    </main>
  );
};

export default Book;
