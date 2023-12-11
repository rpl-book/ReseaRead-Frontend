import "./LibraryTable.css";
import NewTableRow from "../NewTableRow";

const LibraryTable = ({}) => {
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
                  <NewTableRow
                    cover={"/cr-book1.jpg"}
                    bookTitle={"After Lives"}
                    bookAuthor={"Abdul Razak Gurnah"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"140"}
                    totalPage={"288"}
                  />
                  <NewTableRow
                    cover={"/cr-book3.jpeg"}
                    bookTitle={"Vanishing Half"}
                    bookAuthor={"Britt Benett"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"103"}
                    totalPage={"288"}
                  />
                  <NewTableRow
                    cover={"/cr-book2.jpg"}
                    bookTitle={"The Poppy War"}
                    bookAuthor={"R. F. Kuang"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"103"}
                    totalPage={"288"}
                  />
                  <NewTableRow
                    cover={"/cr-book1.jpg"}
                    bookTitle={"After Lives"}
                    bookAuthor={"Abdul Razak Gurnah"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"140"}
                    totalPage={"288"}
                  />
                  <NewTableRow
                    cover={"/cr-book3.jpeg"}
                    bookTitle={"Vanishing Half"}
                    bookAuthor={"Britt Benett"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"103"}
                    totalPage={"288"}
                  />
                  <NewTableRow
                    cover={"/cr-book2.jpg"}
                    bookTitle={"The Poppy War"}
                    bookAuthor={"R. F. Kuang"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"103"}
                    totalPage={"288"}
                  />
                  <NewTableRow
                    cover={"/cr-book1.jpg"}
                    bookTitle={"After Lives"}
                    bookAuthor={"Abdul Razak Gurnah"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"140"}
                    totalPage={"288"}
                  />
                  <NewTableRow
                    cover={"/cr-book3.jpeg"}
                    bookTitle={"Vanishing Half"}
                    bookAuthor={"Britt Benett"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"103"}
                    totalPage={"288"}
                  />
                  <NewTableRow
                    cover={"/cr-book2.jpg"}
                    bookTitle={"The Poppy War"}
                    bookAuthor={"R. F. Kuang"}
                    dateAdded={"2023/10/15"}
                    readingStatus={"Reading"}
                    currentPage={"103"}
                    totalPage={"288"}
                  />
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
