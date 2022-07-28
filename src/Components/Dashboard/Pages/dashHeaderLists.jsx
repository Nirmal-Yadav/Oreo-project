import React from "react";
import "../../../CSS/dashHeader.css";
import { useSelector } from "react-redux";
import MainHeader from "../core/mainheader";
import BasicTable from "./productList";

const DashHeaderLists = () => {
  const myState = useSelector((state) => state.switchNav);

  return (
    <div style={{ width: myState.headerWidth }}>
      <MainHeader />
      <BasicTable />
    </div>
  );
};
export default DashHeaderLists;
