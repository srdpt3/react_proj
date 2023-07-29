import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import Button from "./Button";
const Navbar = () => {
  return (
    <Nav>
      <div className="brand">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="toggle"></div>
      <div className="links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Marketplace</a>
          </li>
          <li>
            <a href="#">Sellers</a>
          </li>
          <li>
            <a href="#">Mint</a>
          </li>
        </ul>
      </div>
      <Button text="Contact" />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
`;
export default Navbar;
