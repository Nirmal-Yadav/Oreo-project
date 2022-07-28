import React from "react";
import DashHeader from "../core/dashHeader";
import SideDash from "../core/sideDash";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideDash />
      <DashHeader />
      <Outlet />
    </div>
  );
};

export default DashBoard;
