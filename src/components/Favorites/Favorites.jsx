import React from 'react';
import './favorites.css';
import { useFavorites } from '../../context/favorite_context';

const Favorites = () => {
  const { state } = useFavorites();
  const { favoriteCourses } = state;

  return (
    <div className="favorites-container">
      <h1 className="favorites-heading">My Favorites</h1>
      {favoriteCourses.length > 0 ? (
        <div className="favorites-list">
          {favoriteCourses.map((course) => (
            <div key={course.id} className="favorite-course-card">
              <img src={course.image} alt={course.course_name} className="course-image" />
              <div className="course-details">
                <h5 className="course-title">{course.course_name}</h5>
                <p className="course-creator">{course.creator}</p>
                <p className="course-price">${course.discounted_price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-favorites-message">No favorites added yet.</p>
      )}
    </div>
  );
};

export default Favorites;
