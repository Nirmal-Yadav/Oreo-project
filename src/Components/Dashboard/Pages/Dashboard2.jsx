import React from "react";
import SideDash from "../core/sideDash";
import DashHeaderLists from "./dashHeaderLists";

const DashBoard2 = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideDash />
      <DashHeaderLists />
    </div>
  );
};

export default DashBoard2;
