import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink> 
        </li>
        <li>
          <NavLink to="/about">ABOUT</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
