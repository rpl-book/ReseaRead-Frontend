"use client";
import "./searchResult.css";
import RadioButton from "@/components/RadioButton/";
import SearchBar from "@/components/SearchBar/";
import SearchResultSection from "@/components/SearchResultSection/";
import AllSimilarBookSection from "@/components/AllSimilarBookSection/";


const searchResult = () => {
  return (
    <div className="container mx-auto max-w-screen-lg mt-20">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-8">
            <SearchBar targetPage={"#"}/> 
            <div className='mt-4'><RadioButton/></div>

            <div className='flex mt-5  mb-2 ml-1 result-category'>
              <div><a href='#'>Books</a></div>
              <div><a href='#'>Reading List</a></div>
              <div><a href='#'>People</a></div> 
            </div> 

            <div className='lineee'></div>
            <div className='book-result ml-1 mt-6'>
              <p>Page 1 of 1 Result</p>
              <div className='mt-6'>
                <SearchResultSection/>
              </div>
            </div>

            <div>
              <AllSimilarBookSection/>
            </div>
          </div>
          
          <div className="col-span-4">
          </div>  
        </div>
    </div>
  );
};

export default searchResult;
