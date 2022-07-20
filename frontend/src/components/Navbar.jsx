import React, { useContext } from "react";
import logo from "@assets/images/logo_RVB_2.png";
import "@styles/Navbar.scss";

import ExportContext from "@contexts/context";

import { NavLink } from "react-router-dom";

function Navbar() {
  const { isOpen, setIsOpen } = useContext(ExportContext.GeneralContext);
  return (
    <div className="menu-wrapper">
      <img src={logo} alt="" />
      <nav className={`navigation ${isOpen ? "open" : ""}`}>
        <button
          aria-label="burger button"
          type="button"
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
        />
        <ul className={`${isOpen ? "navigation-bar " : "responsive_nav hide"}`}>
          <NavLink to="/" className="hover-nav">
            <h1>Accueil</h1>
          </NavLink>
          <li>
            <a href="#projects" className="hover-nav">
              Cours
            </a>
          </li>
          <li>
            <a href="#projects" className="hover-nav">
              Planning/Tarifs
            </a>
          </li>
          <li>
            <a href="#projects" className="hover-nav">
              Contact
            </a>
          </li>
          <NavLink to="/inscription" className="hover-nav">
            <h1>Inscription</h1>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
