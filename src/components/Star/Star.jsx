import "./star.css";
import { useState } from 'react';
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

const StarRating = ({ rating_star, onRate }) => {
  const [hoverRating, setHoverRating] = useState(null);
  const [currentRating, setCurrentRating] = useState(rating_star || 0);

  const handleMouseEnter = (rating) => {
    setHoverRating(rating);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleClick = (rating) => {
    setCurrentRating(rating);
    if (onRate) {
      onRate(rating);
    }
  };

  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    const isFilled = hoverRating ? hoverRating >= idx + 1 : currentRating >= idx + 1;
    const isHalfFilled = hoverRating ? hoverRating >= val && hoverRating < idx + 1 : currentRating >= val && currentRating < idx + 1;

    return (
      <span
        className="star"
        key={idx}
        onMouseEnter={() => handleMouseEnter(idx + 1)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(idx + 1)}
      >
        {isFilled ? (
          <BsStarFill />
        ) : isHalfFilled ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
