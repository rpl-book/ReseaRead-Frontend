import SubsectionText from "../SubsectionText";
import ConReadingCard from "../ConReadingCard";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from "axios";

const ContinueReading = ({ userId, API_URL }) => {
  const [userReads, setUserReads] = useState([]);

  useEffect(() => {
    const fetchUserLibrary = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/library/${userId}`, {
          params: {
            page: 1,
            booksPerPage: 3,
          },
        });
        setUserReads(response.data.libraryBooks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserLibrary();
  }, [userId, API_URL]);

  return (
    <>
      <div className="mt-10  mb-10">
        <SubsectionText title="Continue Reading" />

        <div className="grid grid-cols-3 gap-4">
          {userReads ? (
            userReads.map((userBooks) => (
              <div key={userBooks.bookId} className="mt-10">
                <ConReadingCard
                  bookTitle={userBooks.Book.title}
                  bookAuthor={userBooks.Book.author}
                  bookImg={userBooks.Book.coverImage}
                  currentPage={userBooks.pageProgress}
                  totalPage={userBooks.Book.page}
                />
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>

        <div className="flex justify-center items-center mt-20 mb-20">
          <Button
            buttonName="See More"
            size="20"
            color="white"
            targetPage="/library"
          />
        </div>
      </div>
    </>
  );
};

export default ContinueReading;
