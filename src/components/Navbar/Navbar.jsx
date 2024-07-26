import React, { useState } from 'react';
import './navbar.css';
import { MdMenu, MdShoppingCart, MdFavorite as MdFavoriteOutlined } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/cart_context';
import { FaCartShopping } from 'react-icons/fa6';
import { MdFavorite as MdFavoriteFilled } from 'react-icons/md';
import { useFavorites } from '../../context/favorite_context';


const Navbar = () => {
  const { total_items } = useCartContext();
  const { state, addFavorite, removeFavorite } = useFavorites();
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  // Ensure `favoriteCourses` is defined and an array
  const favorites = state?.favoriteCourses || [];

  const handleChange = (value) => {
    setInput(value);
  };

  const searchResult = () => {
    navigate(`/searched?query=${encodeURIComponent(input)}`);
  };

  const toggleFavorite = (course) => {
    if (favorites.find((fav) => fav.id === course.id)) {
      removeFavorite(course.id);
    } else {
      addFavorite(course);
    }
  };

  const isFavorite = (course) => {
    return favorites.some((fav) => fav.id === course.id);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand-and-toggler">
          <Link to="/" className="navbar-brand" aria-label="Go to homepage">
            <span>l</span>earn
          </Link>

          <div className="searchContainer">
            <input
              type="text"
              className="headerSearch"
              placeholder="Search for courses"
              value={input}
              onChange={(e) => handleChange(e.target.value)}
              aria-label="Search courses"
            />
            <button className="headerSearchButton" onClick={searchResult} aria-label="Search">
              Search
            </button>
          </div>

          <div className="navbar-btns">
            <Link to="/cart" className="cart-btn" aria-label="Go to cart">
              <FaCartShopping />
              <span className="item-count-badge">{total_items}</span>
            </Link>
            <Link to="/liked" className="like-btn" aria-label="Go to favorites">
              {favorites.length > 0 ? (
                <MdFavoriteFilled onClick={() => navigate('/liked')} />
              ) : (
                <MdFavoriteOutlined onClick={() => navigate('/liked')} />
              )}
            </Link>

            <Link to="/login" className="cart-btn" aria-label="Login">
              <button type="button" className="navbar-login">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
