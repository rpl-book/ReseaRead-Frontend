import Image from "next/image";
import "./style.css"; 
import { BsBell, BsChevronDown, BsGear, BsStar, BsStarFill } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical, BsTag } from "react-icons/bs";
import Link from "next/link";
import Button from "../../../Button"
import { useRouter, useSearchParams } from "next/navigation";
// import { BsTag } from '@heroicons/react/outline';
import { useState } from "react";

const BookGroupDetail = ({data, category}) => {

  // const [buttonText, setButtonText] = useState('Add to Library');
  const [buttonText, setButtonText] = useState(data.map(()=>'Add to Library')); 

  const [selectedOption, setSelectedOption] = useState('');
  const [dropdownStates, setDropdownStates] = useState(data.map(() => false));
  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  const handleChange = (currentIndex) => {
    setButtonText(prevButtonTexts => {
      const newTexts = [...prevButtonTexts];
      newTexts[currentIndex] = 'Added to Library';
      return newTexts;
    });
    
    const element = document.getElementById('select_'+currentIndex)
    element.className = 'text-white flex space-x-2 items-center font-bold bg-customColorButton rounded-xl p-2 text-sm';
  };

  const searchParam = useSearchParams()
  const id = searchParam.get('id')
  
  const groupBook = [
    {
      id:1,
      booksThumb:['/thriler1.jpg','/thriler2.jpg','/thriler3.jpg','/thriler4.jpg','/thriler5.jpg','/thriler6.jpg',],
      name:'Best Twist',
      countBook:4432,
    },
    {
      id:2,
      booksThumb:['/thriler1.jpg','/thriler2.jpg','/thriler3.jpg','/thriler4.jpg','/thriler5.jpg','/thriler6.jpg',],
      name:'New Series',
      countBook:4432,
    }
  ]
  const router = useRouter()
  return (
    <div>
      <p>{category}</p>
      <p className="fss mtr">{category} books with twist endings OR good twists and turns throughout.</p>
      {
          data.map((item, index)=>(
            <div key={'span_parent_'+index} className="grid grid-cols-4 gap-3 mt2r">

              <div key={'span_1_'+index} className="col-span-1 cursor-pointer" onClick={()=>{router.push('/bookdetail')}}>
                <Image
                  className="rounded-xl"
                  src={item.imgSrc}
                  alt="Invalid Image"
                  width={100}
                  height={100}
                /> 
              </div>
              <div key={'span_2_'+index} width={100} height={100} className="col-span-2 font-bold cursor-pointer" onClick={()=>{router.push('/bookdetail')}}>
                <p>{item.title}</p>
                <p className="fss text-customColorOrange">{item.writer}</p>
                <div className="mt-2 flex items-center justify-start space-x-4 text-sm font-bold">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, idx) => (
                      idx < Math.round(item.rating) ? 
                      <span className="text-customColorOrange">
                        <BsStarFill/>
                      </span> : 
                      <span className="text-customColorGray">
                        <BsStar/>
                      </span> 
                    ))}
                  </div>
                  <div>
                    {item.rating}
                  </div>
                </div>
                <div className="flex items-center space-x-2 pt-1rem">
                  <BsTag className="w-6 h-6 text-gray-500" />
                  <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{item.category}</p>
                </div>
              </div>
              <div key={'span_3_'+index} className="col-span-1 relative">

                <div className="absolute top-0 right-0 w-[160px] ">
                  {/* <button className="text-customColorButton flex space-x-2 items-center font-bold outline-2 border-2 border-customColorButton rounded-xl p-2 text-sm" id={"select_"+index} onClick={()=>{
                    toggleDropdown(index)}}>
                      <BsChevronDown/>
                      <span>Add to Library</span>
                  </button>
                  {dropdownStates[index] && (
                    <div className="bg-white rounded-md absolute left-0 w-[200px] border-2 py-4 border-customColorButton outline-2 dropdown-content">
                      <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2" onClick={()=>{
                        toggleDropdown(index)
                        handleChange(index)
                      }} >Read</div>
                      <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2" onClick={()=>{
                        toggleDropdown(index)
                        handleChange(index)
                      }} >Want to Read</div>
                      <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2" onClick={()=>{
                        toggleDropdown(index)
                        handleChange(index)
                      }} >Food For Thoughts</div>
                    </div>
                  )} */}
                  <button
                    className="text-customColorButton flex space-x-2 items-center font-bold outline-2 border-2 border-customColorButton rounded-xl p-2 text-sm"
                    id={`select_${index}`}
                    onClick={() => {
                      toggleDropdown(index);
                    }}
                  >
                    <BsChevronDown />
                    <span>{buttonText[index]}</span>
                  </button>
                  {dropdownStates[index] && (
                    <div className="bg-white rounded-md absolute left-0 w-[200px] border-2 py-4 border-customColorButton outline-2 dropdown-content">
                      <div
                        className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2"
                        onClick={() => {
                          toggleDropdown(index);
                          handleChange(index);
                        }}
                      >
                        Read
                      </div>
                      <div
                        className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2"
                        onClick={() => {
                          toggleDropdown(index);
                          handleChange(index);
                        }}
                      >
                        Want to Read
                      </div>
                      <div
                        className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2 py-2"
                        onClick={() => {
                          toggleDropdown(index);
                          handleChange(index);
                        }}
                      >
                        Food For Thoughts
                      </div>
                    </div>
                  )}
                </div>
                
              </div>

              <div key={'span_4_'+index} className="col-span-3 border-t border-gray-300 gap-3"></div>

            </div>
          ))
      }
    </div>
  );
};

export default BookGroupDetail;
