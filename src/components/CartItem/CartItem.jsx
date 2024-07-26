import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';
import './cart.css'; // Import the CSS file

const CartItem = ({ cartItem }) => {
  const { removeFromCart } = useCartContext();

  return (
    <div className="cart-item-wrapper">
      <div className="cart-item-img">
        <img src={cartItem.image} alt={cartItem.course_name} />
      </div>
      <div className="cart-item-info">
        <p className="fw-7 fs-15">{cartItem.course_name}</p>
        <span className="cart-item-creator fs-13 opacity-09">By {cartItem.creator}</span>
        <div className="fw-7 text-purple">${cartItem.discounted_price}</div>
        <div className="cart-item-category bg-orange fs-12 d-inline-block text-capitalize text-white fw-7">{cartItem.category}</div>
        <br />
        <button type="button" className="remove-btn fs-13 text-dark fw-6" onClick={() => removeFromCart(cartItem.courseID)}>
          Remove <span><FaTrashAlt /></span>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
