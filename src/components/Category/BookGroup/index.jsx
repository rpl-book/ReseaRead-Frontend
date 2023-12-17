import Image from "next/image";
import "./style.css";
import { BsBell, BsGear } from "react-icons/bs";
import { CiViewTimeline, CiMail } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import Button from "../../Button";
import { useRouter, useSearchParams } from "next/navigation";

const BookGroup = () => {
  const searchParam = useSearchParams();
  const id = searchParam.get("id");

  const groupBook = [
    {
      id: 1,
      booksThumb: [
        "/thriler1.jpg",
        "/thriler2.jpg",
        "/thriler3.jpg",
        "/thriler4.jpg",
        "/thriler5.jpg",
        "/thriler6.jpg",
      ],
      name: "Best Twist",
      countBook: 4432,
    },
    {
      id: 2,
      booksThumb: [
        "/thriler1.jpg",
        "/thriler2.jpg",
        "/thriler3.jpg",
        "/thriler4.jpg",
        "/thriler5.jpg",
        "/thriler6.jpg",
      ],
      name: "New Series",
      countBook: 4432,
    },
  ];
  const router = useRouter();
  return (
    <div>
      <div className="grid grid-cols-2 grid-flow-row-dense gap-8 mb-4">
        {groupBook.map((dt, index) => (
          <div
            key={"groupbook_" + index}
            className="cursor-pointer"
            onClick={() => {
              router.push(
                "/discovery/category?id=" + id + "&id_group=" + dt.id
              );
            }}
          >
            <div className="mt-4 grid grid-cols-3 gap-2 w-full">
              {dt.booksThumb.map((dts, idx) => (
                <div key={"book_idx_" + idx} className="relative h-[138px]">
                  <Image
                    className="rounded-xl "
                    src={dts}
                    alt={idx}
                    fill
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 font-bold items-start text-xl text-customColorOrange">
              {dt.name}
            </div>
            <div className="mt-2 text-sm text-customColorGray">
              {dt.countBook} Books
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 grid-flow-row-dense gap-8 mb-4">
        {groupBook.map((dt, index) => (
          <div
            key={"groupbook_" + index}
            className="cursor-pointer"
            onClick={() => {
              // router.push('/discovery/category?id='+dt.id)
            }}
          >
            <div className="mt-4 grid grid-cols-3 gap-2 w-full">
              {dt.booksThumb.map((dts, idx) => (
                <div
                  key={"book_idx" + idx + idx}
                  className="relative h-[138px]"
                >
                  <Image
                    className="rounded-xl "
                    src={dts}
                    alt={idx}
                    fill
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 font-bold items-start text-xl text-customColorOrange">
              {dt.name}
            </div>
            <div className="mt-2 text-sm text-customColorGray">
              {dt.countBook} Books
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 grid-flow-row-dense gap-8 mb-4">
        {groupBook.map((dt, index) => (
          <div
            key={"groupbook_" + index}
            className="cursor-pointer"
            onClick={() => {
              // router.push('/discovery/category?id='+dt.id)
            }}
          >
            <div className="mt-4 grid grid-cols-3 gap-2 w-full">
              {dt.booksThumb.map((dts, idx) => (
                <div
                  key={"book_idx" + idx + idx + idx}
                  className="relative h-[138px]"
                >
                  <Image
                    className="rounded-xl "
                    src={dts}
                    alt={idx}
                    fill
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 font-bold items-start text-xl text-customColorOrange">
              {dt.name}
            </div>
            <div className="mt-2 text-sm text-customColorGray">
              {dt.countBook} Books
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookGroup;
