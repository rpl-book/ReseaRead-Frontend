"use client";

import Image from "next/image";
import Link from "next/link";
import { LiaBookSolid } from "react-icons/lia";
import { IconContext } from "react-icons";

const FeaturedBook = ({ image, title, author, desc }) => {
  return (
    <div className="flex md:flex-row flex-col px-20 featured-book relative pt-10 gap-4">
      <Image
        src="/img_featuredbook.png"
        width={350}
        height={350}
        className=""
      />
      <div className="">
        <h1 className="text-black text-7xl">The Mountain is You</h1>
        <h2 className="featured-author my-2 text-3xl">Brianna Wiest</h2>
        <div className="mt-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            elementum, velit a.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Phasellus elementum, velit a.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Phasellus elementum, velit
            a.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            elementum, velit a.
          </p>
        </div>
        <div className="featured-read p-5 w-fit">
          <Link
            href={"/"}
            className="flex flex-row items-center text-white gap-4"
          >
            <IconContext.Provider value={{ color: "white", size: "30" }}>
              <LiaBookSolid />
            </IconContext.Provider>
            Want To Read
          </Link>
        </div>
        <div>{/*Prev and Next Featured Book*/}</div>
      </div>
    </div>
  );
};

export default FeaturedBook;
