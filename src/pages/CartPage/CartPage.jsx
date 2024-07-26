import React from 'react';
import { MdClear } from 'react-icons/md';
import { useCartContext } from '../../context/cart_context';
import CartItem from '../../components/CartItem/CartItem';
import './cartPage.css'; // Import the CSS file

const CartPage = () => {
  const { cart: cartItems, total_items, total_amount, clearCart } = useCartContext();

  if (cartItems.length < 1) {
    return (
      <div className="not-found-wrapper">
        <div className='container'>No items found in the cart.</div>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      <div className='containerr'>
        <div className='cart-page-title'>
          <h3>Shopping Cart</h3>
        </div>
        <div className='cart-grid'>
          
          <div className='cart-grid-left'>
            <div className='flex flex-wrap flex-between'>
              <div className='cart-count-info'>
                <span className='fw-7 fs-18'>{total_items}</span> Course in Cart
              </div>
              <button type="button" className='cart-clear-btn flex fs-15 fw-6 text' onClick={() => clearCart()}>
                <MdClear className='text-pink' />
                <span className='d-inline-block text-pink'>Clear All</span>
              </button>
            </div>

            <div className='cart-items-list'>
              {cartItems.map(cartItem => (
                <CartItem key={cartItem.courseID} cartItem={cartItem} />
              ))}
            </div>
          </div>
       
          <div className='cart-grid-right'>
            <div className='cart-total'>
              <span className='d-block fs-18 fw-6'>Total:</span>
              <div className='cart-total-value fw-8'>${total_amount.toFixed(2)}</div>
              <button type="button" className='checkout-btn fw-6'>Checkout</button>
            </div>
          </div>
    
        </div>
      </div>
    </div>
  );
}

export default CartPage;
