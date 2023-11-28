import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./StarRating.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className={index < rating ? 'star orange' : 'star'}
      onClick={() => handleStarClick(index + 1)}
    />
  ));

  return <div>{stars}</div>;
};

export default StarRating;
