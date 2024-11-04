// src/components/Navbar.js
import React from "react";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1>Travel Advisory</h1>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#advisories">Advisories</a></li>
      <li><a href="#weather">Weather</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
