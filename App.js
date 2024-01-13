import React from "react";
import ReactDOM from "react-dom/client";
const heading=<h1>hello</h1>
const Title=()=>{
  return <h1> title</h1>
}
const HeaderComponent=()=>{
  return(
    <>
    <Title/>
    <h1>nimmy</h1>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(HeaderComponent());