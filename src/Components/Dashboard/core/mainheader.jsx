import React from "react";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";
import SettingsIcon from "@mui/icons-material/Settings";
import { useDispatch } from "react-redux";
import { closeNav, openNav } from "../../../action";
import HomeIcon from "@mui/icons-material/Home";

const MainHeader = () => {
  const dispatch = useDispatch();
  const [flipView, setFlipView] = React.useState(true);

  const changeView = () => {
    setFlipView(!flipView);
    if (flipView === true) {
      console.log("true");
      dispatch(openNav());
    } else {
      console.log("false");
      dispatch(closeNav());
    }
  };
  return (
    <div className="dh-main-container">
      <header className="dh-header">
        <div className="dh-logo-container">
          <img src="../../../Assests/login.jpg" alt=" " />
          <span className="dh-oreo">Oreo</span>
        </div>
        <div className="dh-icon-container">
          <CompareArrowsIcon onClick={changeView} />
          <CalendarTodayIcon />
          <ContactPhoneIcon />
          <NotificationsNoneIcon />
          <EmojiFlagsIcon />
          <div className="dh-input-container">
            <input className="dh-input1" type="text" placeholder="Search..." />
            <SearchIcon />
          </div>
        </div>
        <div className="dh-setting-container">
          <LockIcon />
          <SettingsIcon className="dh-setting-icon" />
        </div>
      </header>
      <div className="dh-2-container">
        <div className="dh-2-content">
          <div className="dh-2-eDash"> eCommerce Dashboard</div>
          <div className="dh-2-wel">Welcome to Oreo</div>
        </div>
        <div className="dh-2-right-container">
          <div className="dh-2-content-link">
            <div className="dh-2-oreo-container dh-l1">
              <HomeIcon />
              <span className="dh-2-oreo-name"> Oreo</span>
              <span className="dh-2-divider"> /</span>
            </div>
            <div className="dh-2-oreo-container">
              <span className="dh-2-oreo-name"> eCommerce</span>
              <span className="dh-2-divider"> /</span>
            </div>
            <div className="dh-2-oreo-container">
              <span className="dh-2-oreo-name"> Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
