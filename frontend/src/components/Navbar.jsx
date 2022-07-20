import React, { useContext } from "react";
import logo from "@assets/images/logo_RVB_2.png";
import "@styles/Navbar.scss";

import ExportContext from "@contexts/context";

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
          <li>
            <a href="#accueil" className="hover-nav">
              Accueil
            </a>
          </li>
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
          <li>
            <a href="#projects" className="hover-nav">
              Inscription
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
