import React, { useState } from "react";
import "./course.css";
import { Link, useNavigate } from "react-router-dom";
import { useFavorites } from "../../../context/favorite_context";
import { BsFillCartPlusFill } from "react-icons/bs";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import StarRating from "../../Star/Star";
import { useCartContext } from "../../../context/cart_context";

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
  const { state, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = state.favoriteCourses.some(course => course.id === id);

  const navigate = useNavigate();

  function AddDetailCard() {
    navigate(`/courses/${id}`);
  }

  const handleFavoriteClick = () => {
    const course = { id, image, course_name, creator, discounted_price, category };
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(course);
    }
  };

  return (
    <div className="course-card">
      <div className="item-img">
        <img src={image} alt={course_name} onClick={AddDetailCard} />
      </div>
      {isFavorite ? (
        <MdFavorite
          className="fav-icon favorited"
          onClick={handleFavoriteClick}
        />
      ) : (
        <MdFavoriteBorder
          className="fav-icon"
          onClick={handleFavoriteClick}
        />
      )}

      <div className="item-body">
        <h5 className="item-name" onClick={AddDetailCard}>
          {course_name}
        </h5>
        <span className="item-creator" onClick={AddDetailCard}>
          {creator}
        </span>
        <div className="item-rating">
          <span className="rating-star-val">
            <StarRating />{" "}
          </span>
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
          <BsFillCartPlusFill className="course-cart-icon" /> Add to cart
        </div>
      </div>
    </div>
  );
};

export default Course;
