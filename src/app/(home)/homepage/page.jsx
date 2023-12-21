"use client";
import FeaturedBook from "@/components/FeaturedBook";
import ContinueReading from "@/components/ContinueReading/";
import NewRelease from "@/components/NewRelease/";
import TopPicks from "@/components/TopPicks/";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { decodeTokenAndSetUserId } from "@/app/utils/decodeTokenAndSetUserId";
import ModalLoading from "@/app/(home)/modal-loadingpage/page";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Home = () => {
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const decodedUserId = await decodeTokenAndSetUserId();

      if (decodedUserId) {
        setUserId(decodedUserId);
      } else {
        router.push("/login");
      }
    };

    fetchUserInfo();
  }, [router]);

  return (
    <main>
      <div className="container mx-auto max-w-screen-lg">
        {userId ? (
          <>
            <FeaturedBook API_URL={API_URL} />
            <ContinueReading userId={userId} API_URL={API_URL} />
            <NewRelease />
            <TopPicks API_URL={API_URL} />
          </>
        ) : (
          <ModalLoading />
        )}
      </div>
    </main>
  );
};

export default Home;
