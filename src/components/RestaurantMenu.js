import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../Constants";
import Shimmer from './Shimmer'
const RestaurantMenu = () => {
  const { id } = useParams();
  const [menuDetails, setMenuDetails] = useState(null);
  const [menuItems, setMenuItems] = useState(null);
  useEffect(() => {
    getMenuDetails();
    console.log("called")
  }, []);

  async function getMenuDetails() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId="+id 
      );
      const json = await data.json();
      console.log(json);

      setMenuDetails(json?.data?.cards[0]?.card?.card?.info);
      setMenuItems(
        json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
          ?.card?.itemCards
      );
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(menuDetails);
  // console.log(menuItems);
  // if(!(menuItems || menuDetails)) return <Shimmer/> //early return 
  return (!(menuItems || menuDetails))? (<Shimmer/>) :(
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
