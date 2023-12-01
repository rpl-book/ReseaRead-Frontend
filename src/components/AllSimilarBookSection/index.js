import React, { useState } from 'react';
import './AllSimilarBookSection.css';
import ButtonIcon from "../ButtonIcon";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import TopPicksCard from "../TopPicksCard";

function AllSimilarBookSection() {
  return (
    <div className="ml-1 mt-6">
      <div className='header ml-1'>
        <p>All Similar Book</p>
        <div className='next-button flex'>
            <ButtonIcon iconTag={<BsChevronLeft/>} fontSize={"23px"} color={"#DA5E42"} targetPage={"#"}/>
            <ButtonIcon iconTag={<BsChevronRight/>} fontSize={"23px"} color={"#DA5E42"} targetPage={"#"}/>
        </div> 
      </div>

      <div class="book-recs ml-1"> 
          <TopPicksCard bookAuthor={"George Orwell"} bookImg={"/tp-book4.jpg"} bookRating={"4.3"} bookTitle={"1984"} linktoauthor={"#"} linktobook={"#"} tag1={"Thriller"} route1={"#"} tag2={"Mystery"} route2={"#"}/> 
          <TopPicksCard bookAuthor={"Virginia Woolf"} bookImg={"/tp-book2.jpg"} bookRating={"4.3"} bookTitle={"The Waves"} linktoauthor={"#"} linktobook={"#"} tag1={"Psychological"} route1={"#"}/>
          <TopPicksCard bookAuthor={"Murakami"} bookImg={"/tp-book3.jpg"} bookRating={"4.3"} bookTitle={"Norwegian Woods"} linktoauthor={"#"} linktobook={"#"} tag1={"Fiction"} route1={"#"} tag2={"Thriller"} route2={"#"}/> 
          <TopPicksCard bookAuthor={"Andy Weir"} bookImg={"/tp-book5.jpg"} bookRating={"4.3"} bookTitle={"Project Hail Mary"} linktoauthor={"#"} linktobook={"#"} tag1={"Thriller"} route1={"#"} tag2={"Mystery"} route2={"#"}/> 
          
        </div>
        
    </div>
  );
}

export default AllSimilarBookSection;
