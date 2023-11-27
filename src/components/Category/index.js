import Image from "next/image";
import "./style.css"; 
import { BsBell, BsGear } from 'react-icons/bs';
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import Button from "../Button";
import { useRouter } from "next/navigation";

const Category = ({data,detail=null}) => {
  const router = useRouter()
  return (
    <div>
      <div className="grid grid-cols-4 grid-flow-row-dense gap-5">
        {
          data.map((dt,index)=>(
            <div key={'category_'+index} className="cursor-pointer" onClick={()=>{
              router.push('/discovery/category?id='+dt.id)
            }}>
              <div className="mt-4 relative h-[214px] w-full rounded-xl">
                <Image
                  className="rounded-xl "
                  src={dt.imgSrc}
                  alt={dt.name}
                  fill
                  objectFit="cover"
                />          
              </div>
              <div className="mt-4 font-bold items-start">
                  {dt.name}
                </div>
            </div>
          ))
        }
      </div>
      {detail !== null && 
        <div className="flex justify-center m-8">
          <Button buttonName="See More" size="20" color="white" targetPage="/discovery/category" />
        </div>
      }
    </div>
  );
};

export default Category;
