import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from 'hamburger-react'

// styles
import "./NavBar.css";

// icons
import { FaSpider } from "react-icons/fa";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo-navbar">
        <FaSpider className="spider-icon" size={60} color="#1b132f" />
      </div>
      <input type="checkbox" id="nav_check" hidden />
      <div className={`navigation ${isMenuOpen ? 'show' : 'hidden'}`}>
        <NavigationLink to="/" text="01. About" />
        <NavigationLink to="/" text="02. Experience" />
        <NavigationLink to="/" text="03. Projects" />
        <NavigationLink to="/contact" text="04. Contact me" />
      </div>
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen}/>
    </div>
  );
}

const NavigationLink = ({ to, text }) => {
  return (
    <Link className="navbar-item" to={to}>
      {text}
      <span></span>
    </Link>
  );
};

export default NavBar;
