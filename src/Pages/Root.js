import React from "react";
import { Outlet } from "react-router-dom";
function RootLayOut() {
  return (
    <>
      <Outlet />;
    </>
  );
}
export default RootLayOut;
