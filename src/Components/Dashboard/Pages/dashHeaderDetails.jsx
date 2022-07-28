import React from "react";
import "../../../CSS/dashHeader.css";
import { useSelector } from "react-redux";
import MainHeader from "../core/mainheader";
import ProductDetail from "./productDetails";

const DashHeaderDetails = () => {
  const myState = useSelector((state) => state.switchNav);

  return (
    <div style={{ width: myState.headerWidth }}>
      <MainHeader />
      <ProductDetail />
    </div>
  );
};
export default DashHeaderDetails;
