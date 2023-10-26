import React from "react";
import "./Header.css";
import C from "../../assests/Header/C.svg";
import U from "../../assests/Header/U.svg";
import V from "../../assests/Header/V.svg";
import T from "../../assests/Header/T.svg";
import E from "../../assests/Header/E.svg";
import profileImg from "../../assests/Header/profileImg.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        {/* Logo */}
        <div className="logo-div">
          <img src={C} className="logo" alt="" />
          <img src={U} className="logo" alt="" />
          <img src={V} className="logo" alt="" />
          <img src={E} className="logo" alt="" />
          <img src={T} className="logo-t" alt="" />
          <img src={T} className="logo-t" alt="" />
          <img src={E} className="logo" alt="" />
        </div>
        {/* Profile */}
        <div className="profile">
          {/* Profile image */}
          <div className="profile-img-div">
            <img src={profileImg} className="profile-img" alt="profile img" />
          </div>
          {/* Profile Name */}
          <div className="profile-name-div">
            <h4 className="profile-name">Siddharth Jain</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
