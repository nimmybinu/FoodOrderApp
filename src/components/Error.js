import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>oops!!!</h1>
      <h1>Something Went Wrong..</h1>
      <h1>{err.status + " : " + err.statusText}</h1>
    </>
  );
};
export default Error;
