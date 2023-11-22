import SubsectionText from "../SubsectionText";
import ConReadingCard from "../ConReadingCard";
import Button from "../Button";

const ContinueReading = () => {
  return (
    <div className="mt-10  mb-10">
      <SubsectionText title="Continue Reading"/>

      <div class="grid grid-cols-3 gap-4">
        
          <div class="mt-10">
            <ConReadingCard 
              bookTitle={"After Live"} 
              bookAuthor={"Abdul Razak Gurnah"} 
              bookImg={"/cr-book1.jpg"} 
              currentPage={"140"} 
              totalPage={"288"}
            />
          </div>

          <div class="mt-10">
            <ConReadingCard 
              bookTitle={"The Poppy War"} 
              bookAuthor={"R. F. Kuang"} 
              bookImg={"/cr-book2.jpg"} 
              currentPage={"100"} 
              totalPage={"290"}
            />
          </div>

          <div class="mt-10">
            <ConReadingCard 
              bookTitle={"Vanishing Half"} 
              bookAuthor={"Brit Bennet"} 
              bookImg={"/cr-book3.jpeg"} 
              currentPage={"40"} 
              totalPage={"140"}
            />
          </div>
        </div>
        <div class="flex justify-center items-center mt-20 mb-20">
          <Button buttonName="See More" size="20" color="white" targetPage="/" />
        </div>

    </div>
  );
};

export default ContinueReading;
