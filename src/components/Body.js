import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
const Body = () => {
  const [searchInput, setSearchInput] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  function filterText(searchInput, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.info.name.includes(searchInput)
    );
  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterText(searchInput, restaurants);
            setRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((resObject) => {
          return <RestaurantCard {...resObject.info} key={resObject.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
