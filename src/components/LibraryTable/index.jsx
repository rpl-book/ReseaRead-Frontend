import "./LibraryTable.css";
import NewTableRow from "../NewTableRow";
import { useEffect, useState } from "react";
import axios from "axios";

const LibraryTable = ({ userId, API_URL }) => {
  const [userLibrary, setUserLibrary] = useState([]);

  useEffect(() => {
    const fetchUserLibrary = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/library/${userId}`);
        setUserLibrary(response.data.libraryBooks);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserLibrary();
  }, [userId, API_URL]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="table-header flex">
          <p className="th1">Cover</p>
          <p className="th2">Title</p>
          <p className="th3">Author</p>
          <p className="th4">Date Added</p>
          <p className="th5">Status</p>
          <p className="th6">Page</p>
          <p className="th7">Configure</p>
        </div>
        <div className="header-line"></div>

        <div className="-m-1.5 overflow-x-auto max-h-[400px]">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-900">
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {userLibrary ? (
                    userLibrary.map((userBooks) => (
                      <NewTableRow
                        key={userBooks.libraryId}
                        cover={userBooks.Book.coverImage}
                        bookTitle={userBooks.Book.title}
                        bookAuthor={userBooks.Book.author}
                        dateAdded={new Date(
                          userBooks.dateAdded
                        ).toLocaleDateString("id")}
                        readingStatus={userBooks.readStatus}
                        currentPage={userBooks.pageProgress}
                        totalPage={userBooks.Book.page}
                      />
                    ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryTable;
