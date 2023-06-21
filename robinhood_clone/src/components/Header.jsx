import React from "react";
import logo from "../assets/robinhood.svg";
import Icon from "@mui/material/Icon";
const Header = () => {
  return (
    <div className="flex flex-col">
      <div className="header__logo">
        <img src={logo} width={25}></img>
      </div>
      {/* Seaerch */}
      <div className="header__search">
        <div className="header__searchContainer">
          {/* <Icon>Sear</Icon> */}
          <input placeholder="Search" type="text"></input>
        </div>
      </div>
      {/* Menue Items */}
      <div className="header__menuItems">
        <a href="#">Free Stocks</a>
        <a href="#">Portfolio</a>
        <a href="#">Cash</a>
        <a href="#">Message</a>
        <a href="#">Account</a>
      </div>
    </div>
  );
};

export default Header;
