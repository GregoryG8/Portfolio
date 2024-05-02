import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";
import { useGlitch } from "react-powerglitch";

// styles
import "./NavBar.css";

// icons
import { FaSpider } from "react-icons/fa";

function NavBar() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const glitch = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 450,
      iterations: 1,
      easing: "ease-in-out"
    },
    glitchTimeSpan: {
      start: 0.20,
      end: 0.70
    }
  });

  return (
    <div className="navbar">
      <div ref={glitch.ref} className="logo-navbar" onClick={() => navigate("/")}>
          <FaSpider className="spider-icon" size={60} color="#182753" />
      </div>
      <input type="checkbox" id="nav_check" hidden />
      <div className={`navigation ${isMenuOpen ? "show" : "hidden"}`}>
        <NavigationLink to="/" text="About" />
        <NavigationLink to="/" text="Experience" />
        <NavigationLink to="/" text="Projects" />
        <NavigationLink to="/contact" text="Contact me" />
      </div>
      <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
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
