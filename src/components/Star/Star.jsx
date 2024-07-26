import "./star.css";
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs';

const StarRating = ({ rating_star }) => {
  const stars = Array.from({ length: 5 }, (_, idx) => {
    const val = idx + 0.5;
    return (
      <span className="star" key={idx}>
        {rating_star >= idx + 1 ? (
          <BsStarFill />
        ) : rating_star >= val ? (
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
