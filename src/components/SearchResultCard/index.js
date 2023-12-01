import "./SearchResultCard.css";
import { PRate, PTitle, PAuthor } from "../PText";
import StarRating from "../StarRating";
import BookTag from "../BookTag";
import AddToLibraryButton from "@/components/AddToLibraryButton/";

const SearchResultCard = ({ bookImg, bookTitle, linktobook, linktoauthor, bookAuthor, rate, 
                            tag1, route1, tag2, route2, tag3, route3, tag4, route4, tag5, route5   
                         }) => {
  return (
    <div>
        <div className="mt-3 card-content">
            <div className="flex">
            <div className="book-img mr-5">
                <img src={bookImg}></img>
            </div>

            <div className="book-desc">
                <PTitle bookTitle={bookTitle} linktobook={linktobook} size={18} ></PTitle>
                <PAuthor bookAuthor={bookAuthor} linktoauthor={linktoauthor} size={18}/>
                <div className="flex mt-9 mb-2">
                        <StarRating/>
                        <div className="ml-3"><PRate rate={rate}/></div>
                </div>
                <BookTag 
                    tag1={tag1} route1={route1}
                    tag2={tag2} route2={route2}
                    tag3={tag3} route3={route3}
                    tag4={tag4} route4={route4}
                    tag5={tag5} route5={route5}
                />
            </div>
        </div>

        <div className="add-button">
            <AddToLibraryButton/>
        </div>
        
        </div>
        
        
        
        <div className='linee'></div>

        
    </div>



    
  );
};

export default SearchResultCard;
