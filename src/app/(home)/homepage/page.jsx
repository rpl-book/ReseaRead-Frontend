"use client";
import FeaturedBook from "@/components/FeaturedBook";
import ContinueReading from "@/components/ContinueReading/";
import NewRelease from "@/components/NewRelease/";
import TopPicks from "@/components/TopPicks/";
import AsyncLocalStorage from "@createnextapp/async-local-storage";
import { getUserIdFromToken } from "@/app/utils/authToken";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Home = () => {
  const [userId, setUserId] = useState(null);
  const router = useRouter();

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
    <main>
      <div className="container mx-auto max-w-screen-lg">
        <FeaturedBook />
        <ContinueReading user={userId} API_URL={API_URL} />
        <NewRelease />
        <TopPicks />
      </div>
    </main>
  );
};

export default Home;
