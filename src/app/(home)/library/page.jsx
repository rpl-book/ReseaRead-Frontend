"use client";
import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import ReadingListMenu from "@/components/ReadinglistMenu";
import LibraryTable from "@/components/LibraryTable";
import Modal from "../modal-addbook/page";
import "./library.css";
import { getUserIdFromToken } from "@/app/utils/authToken";
import { useRouter } from "next/navigation";
import AsyncLocalStorage from "@createnextapp/async-local-storage";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const library = () => {
  const [isModalOpen, setModalOpen] = useState(false);
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

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {userId ? (
        <div className="container mx-auto max-w-screen-lg mt-20">
          <div className="flex flex-row gap-10">
            <div className="basis-3/4 header-lib">
              <h3>LIBRARY</h3>
            </div>
            <div className="basis-1/4 library-tools">
              <button>
                <CiSearch />
              </button>
              <button>
                <CiFilter />
              </button>
              <button>
                <MdOutlineSort />
              </button>
              <button onClick={openModal}>
                <CiCirclePlus />
              </button>
            </div>
          </div>

          <div className="flex">
            <div className="mt-10">
              <ReadingListMenu />
            </div>

            <div className="mt-10 ml-10">
              <LibraryTable userId={userId} API_URL={API_URL} />
            </div>
          </div>

          {isModalOpen && (
            <Modal closeModal={closeModal} userId={userId} API_URL={API_URL} />
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default library;
