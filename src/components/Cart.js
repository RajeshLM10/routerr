import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ productQuantities, totalCartPrice, onRemoveAllClick }) => {
  // State to track whether the cart is minimized or expanded
  const [isCartMinimized, setIsCartMinimized] = useState(false);

  // Function to toggle between minimized and expanded states
  const toggleCart = () => {
    setIsCartMinimized(!isCartMinimized);
  };

  // Function to handle the "Buy Now" button click
  const handleBuyNowClick = () => {
    const formattedTotalPrice = totalCartPrice.toFixed(2);
    alert(`You are about to buy items for a total price of $${formattedTotalPrice}.`);
  };

  return (
    
    <div className={`cart ${isCartMinimized ? 'minimized' : ''}`}>
      <button onClick={toggleCart} className={`minimize-button`}>
        <span role="img" aria-label="Minimize">&#128470;</span>
      </button>
      <i className="fa fa-shopping-cart" aria-hidden="true">
        <span className="cart-quantity">
          {Object.values(productQuantities).reduce((total, quantity) => total + quantity, 0)}
        </span>
      </i>
      {!isCartMinimized && (
        <div className="cart-content">
          <h2>Shopping Cart</h2>
          <p>Total Quantity: {Object.values(productQuantities).reduce((total, quantity) => total + quantity, 0)}</p>
          <p>Total Price: ${totalCartPrice.toFixed(2)}</p>
          <button onClick={onRemoveAllClick}>Remove</button>
        </div>
      )}
      {!isCartMinimized && (
        <button onClick={handleBuyNowClick} className="buy-now-button">
          Buy Now
        </button>
      )}
    </div>
  );
};

export default Cart;
