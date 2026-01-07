import React from 'react';
import iconCart from '../assets/images/icon-cart.png';

function Cart({ cartItems, removeFromCart }) {
  // Cart total
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Function to display cart items if there are any
  const cartContent = () => {
    if (cartItems.length === 0) { // if cart is empty
      return <p className="cart-empty">You have not selected any activity yet</p>;
    }
    else { // if cart has items show them
      return (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span>{item.name} x{item.quantity} - {item.price * item.quantity}€</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <strong>Total: {total}€</strong>
          </div>
          <button className="buy-button" onClick={() => alert('Purchase completed! Thank you for your reservation.')}>
            Buy
          </button>
        </div>
      );
    }
  };

  return (
    // Activities cart section
    <section id="cart" className="cart">
      <h2><img src={iconCart} alt="cart" className="icon" /> Your Activity Selection</h2>
      {cartContent()}
    </section>
  );
}

export default Cart;
