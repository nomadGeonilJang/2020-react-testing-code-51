import React from 'react';

export default function Restaurants({ restaurants = [] }) {
  return (
    restaurants.length > 0 && (
      <ul>
        {restaurants.map((restaurant) => <li key={restaurant.id}>{restaurant.name}</li>)}
      </ul>
    )
  );
}
