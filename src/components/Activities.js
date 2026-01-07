import React from 'react';
import iconActivities from '../assets/images/icon-activities.png';

// Array of available activities
const activitiesList = [
  { id: 1, name: 'Museu Dalí Visit', description: 'Visit the famous Dalí Theatre-Museum and discover the most iconic works of the artist with an interactive audioguide.', price: 20 },
  { id: 2, name: 'Castell de Sant Ferran Visit', description: 'Explore one of the largest fortresses in Europe accompanied by a guide and access historical underground areas.', price: 15 },
  { id: 3, name: 'Museu del Joguet Visit', description: 'A perfect tour for families to discover historical toys and relive childhood memories.', price: 10},
  { id: 4, name: 'Figueres City Centre Walk', description: 'Discover the most iconic streets of Figueres, the Plaça de l\'Ajuntament and Església de Sant Pere accompanied by a guide.', price: 10 },
  { id: 5, name: 'Alt Empordà Gastronomy', description: 'Taste traditional dishes and local wines on a gastronomic tour through typical restaurants.', price: 30 },
  { id: 6, name: 'Costa Brava Getaway', description: 'Half-day trip to nearby coves and beaches such as Roses or Cadaqués with free time to enjoy.', price: 25 },
];

function Activities({ addToCart, cartItems }) {
  // Function to get quantity in cart
  const getQuantityInCart = (id) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      return item.quantity;
    }
    else{
      return 0;
    }
  };

  // Function to get button text
  const getButtonText = (activityId) => {
    const quantity = getQuantityInCart(activityId);
    if (quantity > 0) {
      return 'Add more (' + quantity + ')';
    }
    else{
      return 'Add to cart';
    }
  };

  return (
    // Tourist activities section
    <section className="activities">
      <h2><img src={iconActivities} alt="activities" className="icon" /> Tourist Activities</h2>
      <div className="activities-grid">
        {activitiesList.map(activity => (
          <div key={activity.id} className="activity-card">
            <h3>{activity.name}</h3>
            <p>{activity.description}</p>
            <p className="price">{activity.price}€</p>
            <button onClick={() => addToCart(activity)}>
              {getButtonText(activity.id)}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
