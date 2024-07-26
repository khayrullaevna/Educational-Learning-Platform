import "./course.css";
import { Link, useNavigate } from "react-router-dom";
import Star from "../../Star/Star";
import { useCartContext } from "../../../context/cart_context";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";

const Course = (props) => {
  const {
    id,
    image,
    course_name,
    creator,
    actual_price,
    discounted_price,
    rating_count,
    rating_star,
    category,
  } = props;
  const { addToCart } = useCartContext();

  const navigate = useNavigate();

  function AddDetailCard() {
    navigate(`/courses/${id}`);
  }
  return (
    <div className="course-card" >
      <div className="item-img" onClick={AddDetailCard}>
        <img src={image} alt={course_name} />
      </div>
      <MdFavorite className="fav-icon" />
      <div className="item-body" onClick={AddDetailCard}>
        <h5 className="item-name">{course_name}</h5>
        <span className="item-creator">{creator}</span>
        <div className="item-rating">
          <span className="rating-star-val">{rating_star}</span>
          <Star rating_star={rating_star} />
          <span className="rating-count">({rating_count})</span>
        </div>
        <div className="item-price">
          <span className="item-price-new">${discounted_price}</span>
          <span className="item-price-old">${actual_price}</span>
        </div>
      </div>
      <div className="item-btns">
        <div
          
          className="item-btn add-to-cart-btn"
          onClick={() =>
            addToCart(
              id,
              image,
              course_name,
              creator,
              discounted_price,
              category
            )
          }
        >
          <BsFillCartPlusFill className="course-cart-icon"/>   Add to cart
        </div>

        
      </div>
    </div>
  );
};

export default Course;
