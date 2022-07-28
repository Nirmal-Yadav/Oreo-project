import React from "react";
import SideDash from "../core/sideDash";
import DashHeaderReport from "./dashHeaderReport";

const DashBoard1 = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideDash />
      <DashHeaderReport />
    </div>
  );
};

export default DashBoard1;
// <SideDash />
