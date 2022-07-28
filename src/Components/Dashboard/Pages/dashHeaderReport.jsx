import React from "react";
import "../../../CSS/dashHeader.css";

import { useSelector } from "react-redux";

import ProductReport from "./productreport";

import MainHeader from "../core/mainheader";

const DashHeaderReport = () => {
  const myState = useSelector((state) => state.switchNav);

  return (
    <div style={{ width: myState.headerWidth }}>
      <MainHeader />
      <ProductReport />
    </div>
  );
};
export default DashHeaderReport;
