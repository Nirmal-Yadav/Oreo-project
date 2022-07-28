import React, { useState } from "react";
import "../../../CSS/sideDash.css";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import OreoDash from "./oreodash";
import UserDash from "./userdash";

const SideDash = () => {
  const myState = useSelector((state) => state.switchNav);
  const [sideNav, setSideNav] = useState(false);

  return (
    <div
      className="sidedash-container"
      style={{ display: myState.displaySideNav }}
    >
      <div className="sd-header">
        <div
          className="sd-oreo-container sd1"
          onClick={() => setSideNav(false)}
        >
          <HomeIcon />
          <span className="sd-font">Oreo</span>
        </div>
        <div className="sd-user-container sd1" onClick={() => setSideNav(true)}>
          <PersonIcon />
          <span className="sd-font">User</span>
        </div>
      </div>
      {sideNav ? <UserDash /> : <OreoDash />}
    </div>
  );
};
export default SideDash;
