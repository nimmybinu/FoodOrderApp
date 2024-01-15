import React from "react";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://img.freepik.com/free-vector/sticker-template-with-food-delivery-banner-isolated_1308-62732.jpg?w=740&t=st=1705167198~exp=1705167798~hmac=dd9057f90bcef824ee7129d25214aaa054f95080159663a38400ddb391a9d57a"
      alt="logo"
    />
  </a>
);
const Header = () => {
  let title = "welcome";
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <button onClick={()=>{title=="new title" ;console.log("kkkk")}}>click</button>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
