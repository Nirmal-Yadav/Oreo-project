import React from "react";
import "../../../CSS/dashHeader.css";

import { useSelector } from "react-redux";

import ProductPage from "../Pages/productsPage";
import MainHeader from "./mainheader";

const DashHeader = () => {
  const myState = useSelector((state) => state.switchNav);

  return (
    <div style={{ width: myState.headerWidth }}>
      <MainHeader />
      <ProductPage />
    </div>
  );
};
export default DashHeader;
// <Routes>
//         <Route path="/Dashboard" exact element={<ProductPage />} />
//         <Route path="/Dashboard/report" element={<ProductReport />} />
//       </Routes>
