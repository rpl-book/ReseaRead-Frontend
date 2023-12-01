import Image from "next/image";
import Button from "../Button";
import SubsectionText from "../SubsectionText/";
import TopPicksCard from "../TopPicksCard";


const TopPicks = () => {
  return (
    <div>
      <div className="mt-20 mb-10">
        <SubsectionText title="Top Picks For You"/>
      </div>

      <div class="grid grid-cols-4 ml-0"> 
        <TopPicksCard bookAuthor={"Lynn Painter"} bookImg={"/tp-book1.jpg"} bookRating={"4.3"} bookTitle={"Better Than Movies"} linktoauthor={"#"} linktobook={"#"} tag1={"Romance"} route1={"#"} tag2={"City Pop"} route2={"#"}/> 
        <TopPicksCard bookAuthor={"Virginia Woolf"} bookImg={"/tp-book2.jpg"} bookRating={"4.3"} bookTitle={"The Waves"} linktoauthor={"#"} linktobook={"#"} tag1={"Psychological"} route1={"#"}/>
        <TopPicksCard bookAuthor={"Murakami"} bookImg={"/tp-book3.jpg"} bookRating={"4.3"} bookTitle={"Norwegian Woods"} linktoauthor={"#"} linktobook={"#"} tag1={"Romance"} route1={"#"} tag2={"Fiction"} route2={"#"}/> 
        <TopPicksCard bookAuthor={"George Orwell"} bookImg={"/tp-book4.jpg"} bookRating={"4.3"} bookTitle={"1984"} linktoauthor={"#"} linktobook={"#"} tag1={"Fiction"} route1={"#"} tag2={"City Thriller"} route2={"#"}/> 
      </div>

      <div class="flex justify-center items-center mt-10 mb-10">
          <Button buttonName="See More" size="20" color="white" targetPage="/" />
      </div>

    </div>




  );
};

export default TopPicks;
