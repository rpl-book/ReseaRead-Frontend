'use client'
import { useState } from "react";
import Category from "@/components/Category";
import PublicReadList from "@/components/PublicReadList";
import Trending from "@/components/Trending";
import Button from "@/components/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter, useSearchParams } from "next/navigation";
import BookGroup from "@/components/Category/BookGroup";
import Image from "next/image";
import BookTagFind from "@/components/BookFindTag";

const CategoryDetail = () => {
  const [activeMenu,setActiveMenu] = useState(null)
  const router = useRouter()
  const searchParam = useSearchParams()
  const id = searchParam.get('id')

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
    {
      id:5,
      name:'Romance',
      imgSrc:'/category.png'
    },
    {
      id:6,
      name:'Thriller',
      imgSrc:'/category.png'
    },
    {
      id:7,
      name:'Comic',
      imgSrc:'/category.png'
    },
    {
      id:8,
      name:'Science',
      imgSrc:'/category.png'
    },
    {
      id:9,
      name:'Romance',
      imgSrc:'/category.png'
    },
    {
      id:10,
      name:'Thriller',
      imgSrc:'/category.png'
    },
    {
      id:11,
      name:'Comic',
      imgSrc:'/category.png'
    },
    {
      id:12,
      name:'Science',
      imgSrc:'/category.png'
    },
    {
      id:13,
      name:'Romance',
      imgSrc:'/category.png'
    },
    {
      id:14,
      name:'Thriller',
      imgSrc:'/category.png'
    },
    {
      id:15,
      name:'Comic',
      imgSrc:'/category.png'
    },
    {
      id:16,
      name:'Science',
      imgSrc:'/category.png'
    }
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
        {id !== null ? 
        <div className="flex space-x-20">
            <div className="w-3/4">
                <div className="font-bold flex items-center space-x-4 pt-2 pb-2 text-customDefaultText text-2xl w-full border-b-2">
                    <button onClick={()=>{
                        router.push('/discovery')
                    }}>
                        <BsArrowLeft/>
                    </button>
                    <div className="cursor-pointer" onClick={()=>
                        router.push('/discovery/category')
                    }>
                        Category
                    </div>
                    <div>
                        {"> "+dataCategory[id-1].name}
                    </div>
                </div>
                <div className="mt-4">
                    <BookGroup data={dataCategory}/>
                </div>
            </div>
            <div className="w-2/4">
                <div className="font-bold flex items-center space-x-4 pt-2 pb-2 text-customDefaultText text-2xl w-full border-b-2">
                    Browse Book by Tag
                </div>
                <div className="mt-4">
                    <BookTagFind/>
                </div>
            </div>
        </div> :
        <div className="w-full">
            <div className="font-bold flex items-center space-x-4 pt-2 pb-2 text-customDefaultText text-2xl w-full border-b-2">
                <button onClick={()=>{
                    router.push('/discovery')
                }}>
                    <BsArrowLeft/>
                </button>
                <div className="cursor-pointer" onClick={()=>
                    router.push('/discovery/category')
                }>
                    Category
                </div>
                {id !== null &&
                <div>
                    {"> "+dataCategory[id].name}
                </div>
                }
            </div>
        </div>
        }
      
      {id === null &&
      <div className="mt-4">
          <Category data={dataCategory} />
      </div>
      }
    </main>
  );
};

export default CategoryDetail;
