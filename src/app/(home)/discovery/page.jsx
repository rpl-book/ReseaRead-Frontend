"use client";
import Category from "@/components/Category";
import PublicReadList from "@/components/PublicReadList";
import Trending from "@/components/Trending";
import Button from "@/components/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { getUserIdFromToken } from "@/app/utils/authToken";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Discovery = () => {
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  const categoryType = [
    {
      id: 1,
      name: "Romance",
    },
    {
      id: 2,
      name: "Thriller",
    },
    {
      id: 3,
      name: "Comic",
    },
    {
      id: 4,
      name: "Science",
    },
  ];

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const token = await AsyncLocalStorage.getItem("token");

        if (token) {
          const decodedUserId = getUserIdFromToken(token);

          if (decodedUserId) {
            setUserId(decodedUserId);
          } else {
            console.error("failed to decode User ID from token.");
          }
        } else {
          router.push("/login");
        }
      } catch (err) {
        console.error("Error fetching User Information", err);
      }
    };

    fetchUserInfo();
  }, [router]);

  return (
    <main className="mt-8 container mx-auto max-w-screen-lg">
      <div className="font-bold text-3xl w-[128px] border-b-2">Category</div>
      <div className="mt-4">
        <Category data={categoryType} />
      </div>
      <div className="font-bold text-3xl flex justify-between items-center">
        <div>Trending</div>
        <div className="flex space-x-2">
          <Button
            className="left"
            iconTag={<BsChevronLeft />}
            buttonName=""
            fontSize="12"
            color="white"
            targetPage="#"
          />
          <Button
            className="right"
            iconTag={<BsChevronRight />}
            buttonName=""
            fontSize="12"
            color="white"
            targetPage="#"
          />
        </div>
      </div>
      <div className="w-[128px] border-b-2"></div>
      <div className="mt-4">
        <Trending API_URL={API_URL} />
      </div>
    </main>
  );
};

export default Discovery;
