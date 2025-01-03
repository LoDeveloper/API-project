import React from "react";
import "../CSS/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <button className="nav-button">Home</button>
        </li>
        <li>
          <button className="nav-button">Contact</button>
        </li>
        <li>
          <button className="nav-button">About Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
