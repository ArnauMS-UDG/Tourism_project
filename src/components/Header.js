import React from 'react';
import iconCity from '../assets/images/icon-city.png';
import iconCart from '../assets/images/icon-cart.png';

function Header({ cartCount }) {
  return (
    // Header with title and cart counter
    <header className="header">
      <h1><img src={iconCity} alt="city" className="icon" /> Visit Figueres </h1>
      <a href="#cart" className="cart-icon">
        <img src={iconCart} alt="cart" className="icon" /> {cartCount} activities
      </a>
    </header>
  );
}

export default Header;
