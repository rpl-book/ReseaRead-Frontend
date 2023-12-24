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
import { useRouter } from "next/navigation";
import { decodeTokenAndSetUserId } from "@/app/utils/decodeTokenAndSetUserId";
import ModalLoading from "@/app/(home)/modal-loadingpage/page";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const library = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState("All");
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
              <ReadingListMenu setStatus={setStatus} />
            </div>

            <div className="mt-10 ml-10">
              <LibraryTable
                userId={userId}
                API_URL={API_URL}
                statusType={status}
              />
            </div>
          </div>

          {isModalOpen && (
            <Modal closeModal={closeModal} userId={userId} API_URL={API_URL} />
          )}
        </div>
      ) : (
        <ModalLoading />
      )}
    </>
  );
};

export default library;
