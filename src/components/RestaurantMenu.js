import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { id } = useParams();
  const { menuDetails, menuItems } = useRestaurant(id); //custom hook

  // console.log(menuDetails);
  // console.log(menuItems);
  // if(!(menuItems || menuDetails)) return <Shimmer/> //early return
  return !(menuItems || menuDetails) ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id: {menuDetails.id}</h1>;
        <h1>Restaurant name: {menuDetails.name}</h1>;
        <img src={IMG_URL + menuDetails.cloudinaryImageId} alt="" />
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(menuItems).map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
