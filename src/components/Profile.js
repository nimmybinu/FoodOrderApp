import React, { useEffect } from "react";
const Profile = ({name}) => {
  useEffect(()=>{
 let timer= setInterval(()=>{
    console.log("interval")
  },1000)
  return()=>{
    clearInterval(timer)
  }
  },[])
  return (
    <>
      <h1>Profile component {name}</h1>
    </>
  );
};
export default Profile;

