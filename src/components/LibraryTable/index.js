import "./LibraryTable.css"; 
import { AiOutlineDelete } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import AddNewBook from "../AddNewBook";


const LibraryTable = ({}) => {
  return (
    <div>
       <div class="flex flex-col">
            <div className="-m-1.5 overflow-x-auto max-h-[400px]">
                <div class="min-w-full inline-block align-middle">
                    <div class="overflow-hidden">
                        <table class="min-w-full divide-y divide-gray-900">
                        <thead>
                                <tr>
                                    <th scope="col" class="px-6 py-3 text-center text-m text-black-600 ">Cover</th>
                                    <th scope="col" class="px-6 py-3 text-center text-m text-black-600 ">Title</th>
                                    <th scope="col" class="px-6 py-3 text-center text-m text-black-600 ">Author</th>
                                    <th scope="col" class="px-6 py-3 text-center text-m text-black-600 ">Added</th>
                                    <th scope="col" class="px-6 py-3 text-center text-m text-black-600 ">Status</th>
                                    <th scope="col" class="px-6 py-3 text-center text-m text-black-600 ">Page</th>
                                    <th scope="col" class="px-6 py-3 text-center text-m text-black-600 ">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                <AddNewBook 
                                    cover={"/cr-book1.jpg"} bookTitle={"After Lives"} bookAuthor={"Abdul Razak Gurnah"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"140"}totalPage={"288"}
                                />
                                <AddNewBook 
                                    cover={"/cr-book3.jpeg"} bookTitle={"Vanishing Half"} bookAuthor={"Britt Benett"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"103"}totalPage={"288"}
                                />
                                <AddNewBook 
                                    cover={"/cr-book2.jpg"} bookTitle={"The Poppy War"} bookAuthor={"R. F. Kuang"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"103"}totalPage={"288"}
                                />
                                <AddNewBook 
                                    cover={"/cr-book1.jpg"} bookTitle={"After Lives"} bookAuthor={"Abdul Razak Gurnah"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"140"}totalPage={"288"}
                                />
                                <AddNewBook 
                                    cover={"/cr-book3.jpeg"} bookTitle={"Vanishing Half"} bookAuthor={"Britt Benett"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"103"}totalPage={"288"}
                                />
                                <AddNewBook 
                                    cover={"/cr-book2.jpg"} bookTitle={"The Poppy War"} bookAuthor={"R. F. Kuang"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"103"}totalPage={"288"}
                                />
                                <AddNewBook 
                                    cover={"/cr-book1.jpg"} bookTitle={"After Lives"} bookAuthor={"Abdul Razak Gurnah"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"140"}totalPage={"288"}
                                />
                                <AddNewBook 
                                    cover={"/cr-book3.jpeg"} bookTitle={"Vanishing Half"} bookAuthor={"Britt Benett"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"103"}totalPage={"288"}
                                />
                                <AddNewBook 
                                    cover={"/cr-book2.jpg"} bookTitle={"The Poppy War"} bookAuthor={"R. F. Kuang"} 
                                    dateAdded={"2023/10/15"} readingStatus={"Reading"} currentPage={"103"}totalPage={"288"}
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
