import SubsectionText from "../SubsectionText";
import ConReadingCard from "../ConReadingCard";
import Button from "../Button";
import { useEffect, useState } from "react";

const ContinueReading = ({ userId, API_URL }) => {
  const [userReads, setUserReads] = useState([]);

  useEffect(() => {
    const fetchUserLibrary = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/library/${userId}`);
        setUserReads(response.data.libraryBooks.libBooks);
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
          <div className="mt-10">
            <ConReadingCard
              bookTitle={"After Live"}
              bookAuthor={"Abdul Razak Gurnah"}
              bookImg={"/cr-book1.jpg"}
              currentPage={"140"}
              totalPage={"288"}
            />
          </div>

          {userReads.map((book) => (
            <div key={book.bookId} className="mt-10">
              <ConReadingCard
                bookTitle={book.title}
                bookAuthor={book.author}
                bookImg={book.imageUrl}
                currentPage={book.currentPage}
                totalPage={book.totalPage}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-20 mb-20">
          <Button
            buttonName="See More"
            size="20"
            color="white"
            targetPage="/"
          />
        </div>
      </div>
    </>
  );
};

export default ContinueReading;
