import Image from "next/image";
import "./style.css"; 
import { BsBell, BsChat, BsChevronRight, BsGear, BsHeart, BsStar, BsStarFill, BsTag } from 'react-icons/bs';
import { BsChevronDown } from "react-icons/bs";
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import Button from "../Button"
import { useRouter } from "next/navigation";
import { useState } from "react";

const BookDetail = ({data}) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const [showReview,setShowReview] = useState(false)

  const date = new Date(data.datePublish);
  const monthName = monthNames[date.getMonth()];
  const formattedDate = `First published ${monthName}, ${date.getFullYear()}`;

  const reviewData = [
    {
      id:1,
      name:'Cattleya Yu',
      imgSrc:'/prof-pic1.jpg',
      rate:4,
      followers:91,
      following:15,
      dateRate:'2023-10-15',
      likes:4,
      comments:1,
      rateData:"4 stars, rounded down. This one’s a fictionalized take on ol' ted bundy's 70's killing spree (the unnamed “Defendant” and why does our culture glorify those POS’s?) and it focuses on his victims, esp. at the FL sorority house. Found it a rather slow burner, but very, very interesting & well-written and I really appreciated the historical perspective on how women were just dismissed by the police back then (and sadly today as well)"
    },
    {
      id:2,
      name:'Alexis Kim',
      imgSrc:'/prof-pic2.png',
      rate:4,
      followers:91,
      following:15,
      dateRate:'2023-10-15',
      likes:4,
      comments:1,
      rateData:"4 stars, rounded down. This one’s a fictionalized take on ol' ted bundy's 70's killing spree (the unnamed “Defendant” and why does our culture glorify those POS’s?) and it focuses on his victims, esp. at the FL sorority house. Found it a rather slow burner, but very, very interesting & well-written and I really appreciated the historical perspective on how women were just dismissed by the police back then (and sadly today as well)"
    }
  ]
  const [reviews,setReviews] = useState(reviewData)

  const [deleteIndex, setDeleteIndex] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setDeleteIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setDeleteIndex(null);
    setIsModalOpen(false);
  };
  const [dropdownStates, setDropdownStates] = useState(reviews.map(() => false));
  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  
  const [dropdownStatesLibrary, setDropdownStatesLibrary] = useState(false);
  const toggleDropdownLibrary = () => {
    setDropdownStatesLibrary((prevStates) => {
      // const newStates = [...prevStates];
      // newStates[index] = !newStates[index];
      // return newStates;
      return !prevStates
    });
  };
  const [buttonText, setButtonText] = useState('Add to Library'); 
  const handleChange = () => {
    setButtonText('Added to Library');
    
    const element = document.getElementById('selectAddLibrary')
    element.className = 'text-white flex space-x-2 items-center font-bold bg-customColorButton rounded-xl p-2 text-sm';
    
  };
  const deleteItem = () => {
    if (deleteIndex !== null) {
      setReviews((prevData) => 
        {
          // prevData.filter((_, i) => i !== deleteIndex)
          // setDataPost(prevData.filter((_, i) => i !== deleteIndex))
          return prevData.filter((_, i) => i !== deleteIndex)
        }
      );
      closeModal(); 
    }
  };
  return (
    <div className="flex px-8">
      <div className="flex-col m-4 w-3/12 items-center content-center justify-center">
        <div className="flex flex-col justify-center rounded-xl items-center space-y-3">
          <div>
            <Image
              className="rounded-xl"
              src={data.imgSrc}
              alt={data.title}
              height={270}
              width={180}
              objectFit="fill"
            />
          </div>
          <div>
            <button
              className="text-customColorButton flex space-x-2 items-center font-bold outline-2 border-2 border-customColorButton rounded-xl p-2 text-sm"
              id={'selectAddLibrary'}
              onClick={() => {
                toggleDropdownLibrary();
              }}
            >
              <BsChevronDown />
              <span>{buttonText}</span>
            </button>
            {dropdownStatesLibrary && (
              <div className="bg-white rounded-md absolute w-[200px] border-2 py-4 border-customColorButton outline-2 dropdown-content">
                <div
                  className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2"
                  onClick={() => {
                    toggleDropdownLibrary();
                    handleChange();
                  }}
                >
                  Read
                </div>
                <div
                  className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2"
                  onClick={() => {
                    toggleDropdownLibrary();
                    handleChange();
                  }}
                >
                  Want to Read
                </div>
                <div
                  className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2"
                  onClick={() => {
                    toggleDropdownLibrary();
                    handleChange();
                  }}
                >
                  Food For Thoughts
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-col m-4 w-9/12 space-y-4 text-customDefaultText">
        <div className="text-3xl font-bold">
          {data.title}
        </div>
        <div className="text-base text-customColorOrange">
          {data.writer}
        </div>
        <div className="flex items-center w-full space-x-4 justify-start text-sm font-bold">
          <div className="flex">
          {Array.from({ length: 5 }, (_, idx) => (
            idx < Math.round(data.rating) ? 
            <span className="text-customColorOrange">
              <BsStarFill/>
            </span> : 
            <span className="text-customColorGray">
              <BsStar/>
            </span> 
          ))}
          </div>
          <div className="flex space-x-2">
            <span>{data.rating}</span> 
            <li className=" ">  
              <span>{data.ratingCount} reviews</span>
            </li>
          </div>
        </div>
        <div className="font-bold">
          {data.about}
        </div>
        <div className="pt-4">
          {data.sinopsis}
        </div>
        <div className="mt-2 text-sm flex items-center space-x-4 text-customColorGray">
            <div>
              <BsTag/>
            </div> 
            <div className="flex space-x-1">
              {data.tags.map((dt,idx)=>(
                <div key={"tag_"+idx} className="underline cursor-pointer">
                  {dt + ', '}
                </div>
              ))}
            </div>
          </div>
        <div className="text-xs font-bold flex-col">
          <div>{data.pages} Pages</div>
          <div>{formattedDate}</div>
        </div>
        <div className="flex items-center space-x-2 pt-4 pb-4 font-bold text-customColorButton text-sm cursor-pointer">
          <div>Book details & Editor</div>
          <BsChevronDown/>
        </div>
        <div className="w-full border-2">
        </div>
        <div className="pt-4 pb-4 flex items-center space-x-2 font-bold text-customColorButton text-2xl cursor-pointer">
          <BsChevronRight/>
          <div>About Author</div>
        </div>
        <div className="pt-4 pb-4 flex items-center space-x-2 font-bold text-customColorButton text-2xl cursor-pointer">
          {!showReview ? <BsChevronRight 
          onClick={()=>{
            setShowReview(prevData => !prevData)
          }}/> : <BsChevronDown
          onClick={()=>{
            setShowReview(prevData => !prevData)
          }}/>}
          <div onClick={()=>{
            setShowReview(prevData => !prevData)
          }}>Reviews</div>
        </div>
        <div className="w-full border-2">
        </div>
        {showReview &&
        <div className="">
          {reviews && reviews.map((dt,index)=>(
            <div key={"review_"+index} className="flex h-[300px] space-x-8">
              <div className="flex-col items-center justify-start font-bold w-3/12 flex space-y-2">
                <div className="relative h-[106px] w-[106px] rounded-full border-2 border-white">
                  <Image
                  className="rounded-full" 
                  src={dt.imgSrc}
                  fill
                  alt={dt.imgSrc}
                  />
                </div>
                <div className="text-base text-black">
                  {dt.name}
                </div>
                <div className="text-xs text-black">
                  {dt.followers} Followers
                </div>
                <div className="text-xs text-black">
                  {dt.following} Following
                </div>
                <div className="mt-4">
                  <Button buttonName={'Follow'} fontSize={12} targetPage={'#'} />
                </div>
              </div>
              <div className="flex-col items-start justify-start font-bold w-9/12 flex">
                <div className="flex w-full items-center justify-between mt-8">
                  <div className="flex items-center text-2xl">
                    {Array.from({ length: 5 }, (_, idx) => (
                      idx < Math.round(dt.rate) ? 
                      <span className="text-customColorOrange">
                        <BsStarFill/>
                      </span> : 
                      <span className="text-customColorGray">
                        <BsStar/>
                      </span> 
                    ))}
                    <div className="text-xs">
                      <li className="ml-4">
                        <span>{dt.dateRate}</span>
                      </li>
                    </div>
                  </div>
                  {dt.name === 'Cattleya Yu' ? 
                    <div className="relative">
                      <button className="text-customColorOrange" onClick={()=>{
                        toggleDropdown(index)}}>
                        <BsThreeDotsVertical/>
                      </button>
                      {dropdownStates[index] && (
                        <div className="bg-white rounded-md absolute w-[140px] border-2 py-4 border-black outline-2 dropdown-content right-0">
                          <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2" onClick={()=>{
                            openModal(index)
                            toggleDropdown(index)
                          }} >Delete</div>
                          <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2" >Edit</div>
                        </div>
                      )}
                    </div> : 
                    <div className="relative">
                    <button className="text-customColorOrange" onClick={()=>{
                      toggleDropdown(index)}}>
                      <BsThreeDotsVertical/>
                    </button>
                    {dropdownStates[index] && (
                      <div className="bg-white rounded-md absolute w-[140px] border-2 py-4 border-black outline-2 dropdown-content right-0">
                        <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2" onClick={()=>{
                          toggleDropdown(index)
                        }} >Report</div>
                      </div>
                    )}
                  </div>
                  }
                </div>
                <div className="mt-8 text-sm text-justify">
                  {dt.rateData}
                </div>
                <div className="flex items-center space-x-4 mt-4 text-customColorGray text-sm">
                  <button className="flex items-center space-x-2 ">
                    <BsHeart/>
                    <span>{dt.likes}</span>
                  </button>
                  <button className="flex items-center space-x-4">
                    <BsChat/>
                    <span>{dt.comments}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        }
      </div>
      {isModalOpen && (
      <div className="fixed top-0 left-0 m-0 w-full h-full flex items-center justify-center backdrop-brightness-50">
        <div className="w-5/12 bg-white rounded-xl flex flex-col items-center justify-center mb-96 p-12">
          <p className="text-customDefaultText text-xl">Are you sure you want to delete this item?</p>
          <div className="flex w-4/12 justify-around mt-8">  
            <div onClick={closeModal}><Button targetPage={'#'} buttonName={'No '} fontSize={14} /></div>
            <div onClick={deleteItem}><Button targetPage={'#'} buttonName={'Yes'} fontSize={14} /></div>
          </div>
        </div>  
      </div>
    )}
    </div>
  );
};

export default BookDetail;
