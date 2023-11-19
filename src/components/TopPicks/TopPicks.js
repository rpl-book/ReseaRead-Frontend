import Image from "next/image";
import Button from "../Button/Button";
import SubsectionText from "../SubsectionText/SubsectionText";
import TopPicksCard from "../TopPicksCard/TopPicksCard";


const TopPicks = () => {
  return (
    <div>
      <div className="mt-20 mb-10">
        <SubsectionText title="Top Picks For You"/>
      </div>

      <div class="grid grid-cols-6 gap-7"> 
        <TopPicksCard bookAuthor={"Lynn Painter"} bookImg={"/tp-book1.jpg"} bookRating={"4.3"} bookTitle={"Better Than Movies"}/> 
        <TopPicksCard bookAuthor={"Virginia Woolf"} bookImg={"/tp-book2.jpg"} bookRating={"4.3"} bookTitle={"The Waves"}/> 
        <TopPicksCard bookAuthor={"Murakami"} bookImg={"/tp-book3.jpg"} bookRating={"4.3"} bookTitle={"Norwegian Woods"}/> 
        <TopPicksCard bookAuthor={"George Orwell"} bookImg={"/tp-book4.jpg"} bookRating={"4.3"} bookTitle={"1984"}/> 
        <TopPicksCard bookAuthor={"Britt Bennett"} bookImg={"/tp-book5.webp"} bookRating={"4.3"} bookTitle={"The Mothers"}/> 
        <TopPicksCard bookAuthor={"Sally Roney"} bookImg={"/tp-book6.png"} bookRating={"4.3"} bookTitle={"Normal People"}/> 
      </div>

      <div class="flex justify-center items-center mt-10 mb-10">
          <Button buttonName="See More" size="20" color="white" targetPage="/" />
      </div>

    </div>




  );
};

export default TopPicks;
