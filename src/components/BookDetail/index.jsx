import Image from "next/image";
import "./style.css";
import {
  BsChat,
  BsChevronRight,
  BsHeart,
  BsStar,
  BsStarFill,
  BsTag,
} from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import Button from "../Button";
import { useEffect, useState } from "react";
import axios from "axios";
import BookTag from "../BookTag";

const BookDetail = ({ data, userId, API_URL }) => {
  const [showReview, setShowReview] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownStates, setDropdownStates] = useState(
    reviews.map(() => false)
  );
  const [dropdownStatesLibrary, setDropdownStatesLibrary] = useState(false);
  const [buttonText, setButtonText] = useState("Add to Library");

  const genres = data.genre.split(",").map((genre) => genre.trim());

  useEffect(() => {
    const fetchUsersReview = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/review/bookReviews`, {
          params: {
            bookId: data.bookId,
          },
        });
        setReviews(response.data.payload.bookReviewsData);
      } catch (err) {
        console.error("Error Fetching data", err.message);
      }
    };
    fetchUsersReview();
  }, [API_URL]);

  const openModal = (index) => {
    setDeleteIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setDeleteIndex(null);
    setIsModalOpen(false);
  };

  const toggleDropdown = (index) => {
    setDropdownStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const toggleDropdownLibrary = () => {
    setDropdownStatesLibrary((prevStates) => {
      return !prevStates;
    });
  };

  const handleChange = () => {
    setButtonText("Added to Library");
    const element = document.getElementById("selectAddLibrary");
    element.className =
      "text-white flex space-x-2 items-center font-bold bg-customColorButton rounded-xl p-2 text-sm";
  };

  const deleteItem = () => {
    if (deleteIndex !== null) {
      setReviews((prevData) => {
        return prevData.filter((_, i) => i !== deleteIndex);
      });
      closeModal();
    }
  };

  return (
    <div className="flex px-8">
      <div className="flex-col m-4 w-3/12 items-center content-center justify-center">
        <div className="flex flex-col justify-center rounded-xl items-center space-y-3">
          <div>
            <img
              className="rounded-xl"
              src={data.coverImage}
              alt={data.title}
              height={270}
              width={180}
              objectfit="fill"
            />
          </div>
          <div>
            <button
              className="text-customColorButton flex space-x-2 items-center font-bold outline-2 border-2 border-customColorButton rounded-xl p-2 text-sm"
              id={"selectAddLibrary"}
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
        <div className="text-3xl font-bold">{data.title}</div>
        <div className="text-base text-customColorOrange">{data.author}</div>
        <div className="flex items-center w-full space-x-4 justify-start text-sm font-bold">
          <div className="flex">
            {Array.from({ length: 5 }, (_, idx) => (
              <span key={`star_${idx}`} className="flex">
                {idx < Math.round(data.rating) ? (
                  <span className="text-customColorOrange">
                    <BsStarFill />
                  </span>
                ) : (
                  <span className="text-customColorGray">
                    <BsStar />
                  </span>
                )}
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            <span>{data.rating}</span>
          </div>
        </div>
        <div className="pt-4">{data.description}</div>
        <div className="mt-2 text-sm flex items-center space-x-4 text-customColorGray">
          <div>
            <BsTag />
          </div>
          <div className="flex space-x-1">
            <BookTag
              tags={genres.map((tag, index) => ({
                name: tag,
                route: `#${index + 1}`,
              }))}
            />
          </div>
        </div>
        <div className="text-xs font-bold flex-col">
          <div>{data.page} Pages</div>
        </div>
        <div className="flex items-center space-x-2 pt-4 pb-4 font-bold text-customColorButton text-sm cursor-pointer">
          <div>Book details & Editor</div>
          <BsChevronDown />
        </div>
        <div className="w-full border-2"></div>
        <div className="pt-4 pb-4 flex items-center space-x-2 font-bold text-customColorButton text-2xl cursor-pointer">
          <BsChevronRight />
          <div>About Author</div>
        </div>
        <div className="pt-4 pb-4 flex items-center space-x-2 font-bold text-customColorButton text-2xl cursor-pointer">
          {!showReview ? (
            <BsChevronRight
              onClick={() => {
                setShowReview((prevData) => !prevData);
              }}
            />
          ) : (
            <BsChevronDown
              onClick={() => {
                setShowReview((prevData) => !prevData);
              }}
            />
          )}
          <div
            onClick={() => {
              setShowReview((prevData) => !prevData);
            }}
          >
            Reviews
          </div>
        </div>
        <div className="w-full border-2"></div>
        {showReview && (
          <div className="">
            {reviews &&
              reviews.map((review) => (
                <div key={review.reviewId} className="flex h-[300px] space-x-8">
                  <div className="flex-col items-center justify-start font-bold w-3/12 flex space-y-2">
                    <div className="relative h-[106px] w-[106px] rounded-full border-2 border-white">
                      <img
                        className="rounded-full"
                        src={review.User.userImage}
                        fill
                        alt={review.User.title}
                      />
                    </div>
                    <div className="text-base text-black">
                      {review.User.userName}
                    </div>
                    <div className="mt-4">
                      <Button
                        buttonName={"Follow"}
                        fontSize={12}
                        targetPage={"#"}
                      />
                    </div>
                  </div>
                  <div className="flex-col items-start justify-start font-bold w-9/12 flex">
                    <div className="flex w-full items-center justify-between mt-8">
                      <div className="flex items-center text-2xl">
                        {Array.from({ length: 5 }, (_, idx) =>
                          idx < Math.round(dt.rate) ? (
                            <span className="text-customColorOrange">
                              <BsStarFill />
                            </span>
                          ) : (
                            <span className="text-customColorGray">
                              <BsStar />
                            </span>
                          )
                        )}
                        <div className="text-xs">
                          <li className="ml-4"></li>
                        </div>
                      </div>
                      {dt.name === "Cattleya Yu" ? (
                        <div className="relative">
                          <button
                            className="text-customColorOrange"
                            onClick={() => {
                              toggleDropdown(index);
                            }}
                          >
                            <BsThreeDotsVertical />
                          </button>
                          {dropdownStates[index] && (
                            <div className="bg-white rounded-md absolute w-[140px] border-2 py-4 border-black outline-2 dropdown-content right-0">
                              <div
                                className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2"
                                onClick={() => {
                                  openModal(index);
                                  toggleDropdown(index);
                                }}
                              >
                                Delete
                              </div>
                              <div className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2">
                                Edit
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="relative">
                          <button
                            className="text-customColorOrange"
                            onClick={() => {
                              toggleDropdown(index);
                            }}
                          >
                            <BsThreeDotsVertical />
                          </button>
                          {dropdownStates[index] && (
                            <div className="bg-white rounded-md absolute w-[140px] border-2 py-4 border-black outline-2 dropdown-content right-0">
                              <div
                                className="hover:bg-customColorOrange hover:text-white cursor-pointer px-2"
                                onClick={() => {
                                  toggleDropdown(index);
                                }}
                              >
                                Report
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="mt-8 text-sm text-justify">
                      {dt.rateData}
                    </div>
                    <div className="flex items-center space-x-4 mt-4 text-customColorGray text-sm"></div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 m-0 w-full h-full flex items-center justify-center backdrop-brightness-50">
          <div className="w-5/12 bg-white rounded-xl flex flex-col items-center justify-center mb-96 p-12">
            <p className="text-customDefaultText text-xl">
              Are you sure you want to delete this item?
            </p>
            <div className="flex w-4/12 justify-around mt-8">
              <div onClick={closeModal}>
                <Button targetPage={"#"} buttonName={"No "} fontSize={14} />
              </div>
              <div onClick={deleteItem}>
                <Button targetPage={"#"} buttonName={"Yes"} fontSize={14} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetail;
