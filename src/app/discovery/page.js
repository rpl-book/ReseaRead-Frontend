'use client'
import ProfilePage from "@/components/ProfilePage";
import SideBar from "@/components/SideBar";
import RightBar from "@/components/RightBar";
import { useState } from "react";
import ProfileSetting from "@/components/ProfileSetting";
import Category from "@/components/Category";
import PublicReadList from "@/components/PublicReadList";
import Trending from "@/components/Trending";

// import ContinueReading from "@/components/ContinueReading/";
// import NewRelease from "@/components/NewRelease/";
// import TopPicks from "@/components/TopPicks/";


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
    <main className="mt-4">
      <div className="font-bold text-customDefaultText text-3xl w-[128px] border-b-2">
        Category
      </div>
      <div className="mt-4">
          <Category data={dataCategory} />
      </div>
      <div className="font-bold text-customDefaultText text-3xl flex justify-between">
        <div>Trending</div>
        <div>{"< > "}</div>
      </div>
      <div className="w-[128px] border-b-2">
      </div>
      <div className="mt-4">
          <Trending data={dataTrending} />
      </div>
      <div className="font-bold text-customDefaultText text-3xl ">
        Public Reading List
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
