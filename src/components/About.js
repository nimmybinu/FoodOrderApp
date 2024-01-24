import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Outlet } from "react-router-dom";
// const About2 = () => {
//   return (
//     <>
//     <h1>About us</h1>
//     {/* <Outlet/> */}
//     <Profile name={"xyz"}/>
//     <ProfileClass name={"xyz"}/>

//     </>
//   )
// };
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount(){
    console.log(" Parent componentDidMount")
  }
  render() {
    console.log("parent render")
    return (
      <>
        <h1>About us</h1>
        {/* <Outlet/> */}
        <Profile name={"xyz"} /> 
        {/* <ProfileClass name={"first child"} /> */}
        
      </>
    );
  }
}
export default About;
