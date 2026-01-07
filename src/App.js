import React, { useState } from 'react';
import './App.css';

// Component imports
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Activities from './components/Activities';
import Cart from './components/Cart';
import Footer from './components/Footer';
import MusicButton from './components/MusicButton';

function App() {
  // Cart items
  const [cartItems, setCartItems] = useState([]);

  // Add activity to cart (if it exists, increase quantity)
  const addToCart = (activity) => {
    const existingItem = cartItems.find(item => item.id === activity.id);
    if (existingItem) { // if item already exists, increase quantity
      setCartItems(cartItems.map(item => {
        if (item.id === activity.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        else {
          return item;
        }
      }));
    } else { // if it doesn't exist, add it with quantity 1
      setCartItems([...cartItems, { ...activity, quantity: 1 }]);
    }
  };

  // Remove one unit from cart (if 0 left, remove item)
  const removeFromCart = (activityId) => {
    const existingItem = cartItems.find(item => item.id === activityId);
    if (existingItem) { // if item exists
      if (existingItem.quantity > 1) { // if more than 1, decrement
      setCartItems(cartItems.map(item => {
        if (item.id === activityId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        else {
          return item;
        }
      }));
      } else { // if 1, remove item
        setCartItems(cartItems.filter(item => item.id !== activityId));
      }
    }
    
  };

  // Total items in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="App">
      <MusicButton />
      <Header cartCount={totalItems} />
      <Hero />
      <Gallery />
      <VideoSection />
      <Activities addToCart={addToCart} cartItems={cartItems} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
}

export default App;
