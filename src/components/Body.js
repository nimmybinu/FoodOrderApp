import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import Shimmer from "./Shimmer";
import {Link } from 'react-router-dom'
import {filterText} from '../utils/helper'
import useOnline from "../utils/useOnline"

const Body = () => {
  const [searchInput, setSearchInput] = useState();
  const [FilteredRestaurants, setFilteredRestaurants] = useState([]);
  const [AllRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getAPI();
  }, []);
  console.log(AllRestaurants);
  async function getAPI() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  }
  const online=useOnline()
  if(!online){
    return <h1>you are offline.Please check your internet connection</h1>
  }
  //early return
  if (!AllRestaurants) return null;
  // if (FilteredRestaurants?.length === 0) return <h1>No mathing found</h1>;

  return AllRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterText(searchInput, AllRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {FilteredRestaurants.map((resObject) => {
          return (
            <Link to={"/restaurant/"+ resObject.info.id} key={resObject.info.id}> 
              <RestaurantCard {...resObject.info}  />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
