'use client'
import { useState } from "react";
import Category from "@/components/Category";
import PublicReadList from "@/components/PublicReadList";
import Trending from "@/components/Trending";
import Button from "@/components/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const Discovery = () => {
  const [activeMenu,setActiveMenu] = useState(null)

  const dataCategory = [
    {
      id:1,
      name:'Romance',
      imgSrc:'/category.png'
    },
    {
      id:2,
      name:'Thriller',
      imgSrc:'/category.png'
    },
    {
      id:3,
      name:'Comic',
      imgSrc:'/category.png'
    },
    {
      id:4,
      name:'Science',
      imgSrc:'/category.png'
    },
  ]

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
      <div className="font-bold text-customDefaultText text-3xl w-[128px] border-b-2">
        Category
      </div>
      <div className="mt-4">
          <Category data={dataCategory} detail={true} />
      </div>
      <div className="font-bold text-customDefaultText text-3xl flex justify-between items-center">
        <div>Trending</div>
        <div className="flex space-x-2">
          <Button className="left" iconTag={<BsChevronLeft />} buttonName="" fontSize="12" color="white" targetPage="#"/>
          <Button className="right" iconTag={<BsChevronRight />} buttonName="" fontSize="12" color="white" targetPage="#"/>
        </div>
      </div>
      <div className="w-[128px] border-b-2">
      </div>
      <div className="mt-4">
          <Trending data={dataTrending} />
      </div>
      <div className="font-bold text-customDefaultText text-3xl flex justify-between items-center">
        <div>Public Reading List</div>
        <div className="flex space-x-2">
          <Button className="left" iconTag={<BsChevronLeft />} buttonName="" fontSize="12" color="white" targetPage="#"/>
          <Button className="right" iconTag={<BsChevronRight />} buttonName="" fontSize="12" color="white" targetPage="#"/>
        </div>
      </div>
      <div className="w-[128px] border-b-2">
      </div>
      <div className="mt-4">
          <PublicReadList data={publicReadingList} />
      </div>
    </main>
  );
};

export default Discovery;
