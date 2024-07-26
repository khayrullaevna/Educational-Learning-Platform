import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCoursesContext } from "../../context/courses_context";

import { MdInfo } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cart_context";
import './singleCoursesPage.css'; // Import the stylesheet
import StarRating from "../../components/Star/Star";
import "./singleCoursesPage.css"

const SingleCoursePage = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchSingleCourse(id);
  }, [fetchSingleCourse, id]);

  const {
    id: courseID,
    category,
    image,
    course_name,
    description,
    rating_count,
    rating_star,
    students,
    creator,
    updated_date,
    lang,
    actual_price,
    discounted_price,
    what_you_will_learn: learnItems,
    content,
  } = single_course;

  return (
    <div className="single-course-page">
      <div className="course-intro">
        <div className="course-img">
          <img src={image} alt={course_name} />
        </div>
        <div className="course-details">
          <div className="course-category">{category}</div>
          <div className="course-head">
            <h5>{course_name}</h5>
          </div>
          <div className="course-body">
            <p className="course-para">{description}</p>
            <div className="course-rating">
              <span className="rating-star-val">{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className="rating-count">({rating_count})</span>
              <span className="students-count">{students}</span>
            </div>
            <ul className="course-info">
              <li>
                <span>Created by <span className="creator">{creator}</span></span>
              </li>
              <li>
                <span><MdInfo /></span>
                <span className="info-text">Last updated {updated_date}</span>
              </li>
              <li>
                <span><TbWorld /></span>
                <span className="info-text">{lang}</span>
              </li>
              <li>
                <span><RiClosedCaptioningFill /></span>
                <span className="info-text">{lang} [Auto]</span>
              </li>
            </ul>
          </div>
          <div className="course-foot">
            <div className="course-price">
              <span className="new-price">${discounted_price}</span>
              <span className="old-price">${actual_price}</span>
            </div>
          </div>
          <div className="course-btn">
            <Link
              to="/cart"
              className="add-cart-btn"
              onClick={() =>
                addToCart(
                  courseID,
                  image,
                  course_name,
                  creator,
                  discounted_price,
                  category
                )
              }
            >
              <FaShoppingCart /> Add to cart
            </Link>
          </div>
        </div>
      </div>
      <div className="course-full">
        <div className="course-learn">
          <div className="course-sc-title">What you'll learn</div>
          <ul className="course-learn-list">
            {learnItems && learnItems.map((learnItem, idx) => (
              <li key={idx}>
                <span><BiCheck /></span>
                <span>{learnItem}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="course-content">
          <div className="course-sc-title">Course content</div>
          <ul className="course-content-list">
            {content && content.map((contentItem, idx) => (
              <li key={idx}>
                <span>{contentItem}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleCoursePage;
