import React from "react";
const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((index) => {
          return <div className="shimmer-card" key={index}></div>;
        })}
    </div>
  );
};
export default Shimmer;
