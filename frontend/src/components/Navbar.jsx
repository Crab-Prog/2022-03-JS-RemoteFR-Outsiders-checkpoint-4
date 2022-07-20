import React, { useContext } from "react";
import logo from "@assets/images/logo_RVB_2.png";
import "@styles/Navbar.scss";

import ExportContext from "@contexts/context";

import { NavLink } from "react-router-dom";

function Navbar() {
  const { isOpen, setIsOpen } = useContext(ExportContext.GeneralContext);

  //   const handleRefresh = (e) => {
  // e.target.preventDefault();
  //   }
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

          <details>
            <summary> Cours</summary>
            <div className="drop-down-menu">
              <NavLink to="/cours_popping" className="hover-nav">
                <h1>Popping</h1>
              </NavLink>
              <NavLink to="/cours_locking" className="hover-nav">
                <h1>Locking</h1>
              </NavLink>
              <NavLink to="/cours_new-school" className="hover-nav">
                <h1>New School</h1>
              </NavLink>
              <NavLink to="/cours_dancehall" className="hover-nav">
                <h1>Dancehall</h1>
              </NavLink>
            </div>
          </details>

          <NavLink to="/planning_tarifs" className="hover-nav">
            <h1>Planning/Tarifs</h1>
          </NavLink>

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
      <hr />
    </div>
  );
}

export default Navbar;
