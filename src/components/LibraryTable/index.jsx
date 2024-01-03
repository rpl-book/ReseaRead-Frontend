import "./LibraryTable.css";
import NewTableRow from "../NewTableRow";
import { useEffect, useState } from "react";
import axios from "axios";

const LibraryTable = ({ userId, API_URL, statusType }) => {
  const [userLibrary, setUserLibrary] = useState([]);

  const headers = [
    "Cover",
    "Title",
    "Author",
    "Date Added",
    "Status",
    "Page",
    "Configure",
  ];

  useEffect(() => {
    const fetchUserLibrary = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/library/${userId}`);
        const thisUserBook = response.data.libraryBooks;
        const filteredLibByStatus =
          statusType === "All"
            ? thisUserBook
            : thisUserBook.filter(
                (bookInLib) => bookInLib.readStatus === statusType
              );
        setUserLibrary(filteredLibByStatus);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserLibrary();
  }, [userId, API_URL, statusType]);

  return (
    <div className="w-4/5">
      <table className="w-full">
        <thead>
          <tr>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date Added</th>
            <th>Status</th>
            <th>Page</th>
            <th>Configure</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {userLibrary ? (
            userLibrary.map((userBooks) => (
              <NewTableRow
                key={userBooks.libraryId}
                libraryId={userBooks.libraryId}
                cover={userBooks.Book.coverImage}
                bookTitle={userBooks.Book.title}
                bookAuthor={userBooks.Book.author}
                dateAdded={new Date(userBooks.dateAdded).toLocaleDateString(
                  "id"
                )}
                readingStatus={userBooks.readStatus}
                currentPage={userBooks.pageProgress}
                totalPage={userBooks.Book.page}
              />
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryTable;
