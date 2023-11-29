'use client'
import { useState } from "react";
import Category from "@/components/Category";
import PublicReadList from "@/components/PublicReadList";
import Trending from "@/components/Trending";
import Button from "@/components/Button";
import { BsArrowLeft, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import BookDetail from "@/components/BookDetail";


const BooksDetail = () => {
  const [activeMenu,setActiveMenu] = useState(null)
  const router = useRouter()
  const booksData = {
    id:1,
    title:'Bright Young Women',
    writer:'Jessica Knoll',
    rating:4.97,
    ratingCount:112,
    about:"An extraordinary novel inspired by the real-life sorority targeted by America`s first celebrity serial killer in his final murderous spree.",
    sinopsis:"Bright Young Women is the story about two women from opposite sides of the country who become sisters in their fervent pursuit of the truth. It proposes a new narrative inspired by evidence that’s been glossed over for decades in favor of more salable headlines—that the so-called brilliant and charismatic serial killer from Seattle was far more average than the countless books, movies, and primetime specials have led us to believe, and that it was the women whose lives he cut short who were the exceptional ones.",
    tags:['Fictions','Thriller','Psychological','Suspense','Mysteri','Crime'],
    pages:384,
    datePublish:'2023-09',
    imgSrc:'/thriler2.jpg',
  }

  const dataTrending = [
    {
      id:1,
      title:'Better Than The Movies',
      writer:'Lynn Painter',
      rating:4.9,
      category:'Romance, Citypop',
      imgSrc:'/trend1.jpg'
    },
    {
      id:2,
      title:'Happily Never After',
      writer:'Lynn Painter',
      rating:4.3,
      category:'Romance, Citypop',
      imgSrc:'/trend2.jpg'
    },
    {
      id:3,
      title:'Love Wager',
      writer:'Lynn Painter',
      rating:4.3,
      category:'Romance, Citypop',
      imgSrc:'/trend3.jpg'
    },
    {
      id:4,
      title:'Better Than Prom',
      writer:'Lynn Painter',
      rating:4.3,
      category:'Romance, Citypop',
      imgSrc:'/trend4.png'
    },
    {
      id:5,
      title:'Mr. Wrong Number',
      writer:'Lynn Painter',
      rating:4.3,
      category:'Romance, Citypop',
      imgSrc:'/trend5.png'
    },
  ]

  const publicReadingList = [
    {
      id:1,
      group:'Food For Thoughts',
      books:[
        {
          id:1,
          imgSrc:'/tr1.jpg'
        },
        {
          id:2,
          imgSrc:'/tr2.jpg'
        },
        {
          id:3,
          imgSrc:'/tr3.jpg'
        },
      ]
    },
    {
      id:2,
      group:'From Lynn',
      books:[
        {
          id:1,
          imgSrc:'/tr1.jpg'
        },
        {
          id:2,
          imgSrc:'/tr2.jpg'
        },
        {
          id:3,
          imgSrc:'/tr3.jpg'
        },
      ]
    },
    {
      id:3,
      group:'Should Made Into Movies',
      books:[
        {
          id:1,
          imgSrc:'/tr1.jpg'
        },
        {
          id:2,
          imgSrc:'/tr2.jpg'
        },
        {
          id:3,
          imgSrc:'/tr3.jpg'
        },
        {
          id:4,
          imgSrc:'/tr1.jpg'
        },
        {
          id:5,
          imgSrc:'/tr2.jpg'
        },
        {
          id:6,
          imgSrc:'/tr3.jpg'
        },
        {
          id:7,
          imgSrc:'/tr1.jpg'
        },
        {
          id:8,
          imgSrc:'/tr2.jpg'
        },
        {
          id:9,
          imgSrc:'/tr3.jpg'
        },
      ]
    },
    
  ]

  const onClickButton = (data) => {
    setActiveMenu((prevData)=>{
      if(prevData == data) 
        return null
      else
        return data
    })
  }
  return (
    <main className="mt-8 container mx-auto max-w-screen-lg">
      <div className="w-full">
        <div className="font-bold flex items-center space-x-4 pt-2 pb-2 text-customDefaultText text-2xl w-full border-b-2">
          <button onClick={()=>{
              router.back()
          }}>
              <BsArrowLeft/>
          </button>
          <div className="cursor-pointer">
              Book Details
          </div>
        </div>
      </div>
      <div className="mt-4">
        <BookDetail data={booksData}/>
      </div>
    </main>
  );
};

export default BooksDetail;
