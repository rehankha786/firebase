import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="btn-book">
      <NavLink to="/form">
        <div className="btn btn-secondary" id="btn">
          <b>create book</b>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
