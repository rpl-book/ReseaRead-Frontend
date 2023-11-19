"use client";

import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import "./FeaturedBook.css"; 
import Button from "../Button/Button";


const FeaturedBook = ({ image, title, author, desc }) => {
  return (
    <div>
      <div className="featured-wrap">

        <div class="banner-img-accent">
            <img src="/banner-accent.png" alt=""></img>
        </div>

        <h1 className="featured-title font">THE MOUNTAIN <br/> IS YOU</h1>
        <img className="featured-img" src="/banner-book.jpg" width={230} height={230} />
      </div>

      <div className="featured-prev-next">
        <Button className="left" iconTag={<BsChevronLeft />} buttonName="" fontSize="30" color="white" targetPage="/"/>
        <Button className="right" iconTag={<BsChevronRight />} buttonName="" fontSize="30" color="white" targetPage="/"/>
      </div>
      
      <div className="banner">
        <h2 className="featured-author font">Brianna Wiest</h2>
        <div className="featured-desc font">
          <p>
          Coexisting but conflicting needs create self-sabotaging behaviors. 
          This is why we resist efforts to change, often until they feel completely futile. 
          But by extracting crucial insight from our most damaging habits, building emotional intelligence 
          by better understanding our brains and bodies, releasing past experiences at a cellular level, and 
          learning to act as our highest potential future selves, we can step out of our own way and into our potential.
          </p>

          <div className="button-want-to-read">
            <Button buttonName="Want To Read" size="20" color="white" targetPage="/"/>
          </div>
        </div>

        

      </div>
    </div>


  );
};

export default FeaturedBook;
