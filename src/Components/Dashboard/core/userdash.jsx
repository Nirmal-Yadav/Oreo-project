import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const UserDash = () => {
  return (
    <div className="userdash-container">
      <div className="sd-user-info-container">
        <div className="sd-img-container">
          <img
            className="sd-user-img"
            src="https://thememakker.com/templates/oreo/html/assets/images/profile_av.jpg"
            alt=" "
          />
        </div>
        <div className="sd-user-name">Michael</div>
        <div className="sd-user-prof">UI UX Designer</div>
        <div className="sd-info-icon">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
        </div>
        <p className="ud-user-info">
          795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
        </p>
        <div className="ud-posts-info ">
          <div className="ud-following-info ud-i">
            <span className="ud-following-no ud-fc">852</span>
            <span className="ud-following-name ud-f">Following</span>
          </div>
          <div className="ud-following-info ud-i">
            <span className="ud-following-no ud-fc">13k</span>
            <span className="ud-following-name ud-f">Followers</span>
          </div>
          <div className="ud-following-info ud-i">
            <span className="ud-following-no ud-fc">234</span>
            <span className="ud-following-name ud-f">Post</span>
          </div>
        </div>
      </div>
      <div className="ud-email-container ud-EP">
        <span className="ud-email udEP1"> Email Address : </span>
        <span className="ud-email-address" style={{ fontWeight: "600" }}>
          {" "}
          michael@gmail.com
        </span>
      </div>
      <div className="ud-phone-container ud-EP">
        <span className="ud-phone udEP1">Phone</span>
        <span className="ud-phone-number" style={{ fontWeight: "600" }}>
          + 202-555-0191
        </span>
      </div>
    </div>
  );
};
export default UserDash;
