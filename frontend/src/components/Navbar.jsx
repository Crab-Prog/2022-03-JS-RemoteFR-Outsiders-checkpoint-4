import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ExportContext from "@contexts/context";

import logo from "@assets/images/logo_RVB_2.png";

import "@styles/Navbar.scss";

function Navbar() {
  const { isOpen, setIsOpen } = useContext(ExportContext.GeneralContext);
  const { isVisible, setIsVisible } = useContext(ExportContext.GeneralContext);
  const navigate = useNavigate();

  // const handleNavigate = () => {
  //   navigate("/authentification");
  // };
  const handleNavigateHome = () => {
    navigate("/");
  };
  const handleChangeNav = () => {
    setIsVisible(false);
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-wrapper">
      <button type="button" onClick={handleNavigateHome}>
        <img src={logo} alt="" className="logo-img" />
      </button>
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

          <details open={handleChangeNav}>
            <summary onClick={() => setIsVisible(true)}>
              <p>Cours</p>
              <img
                src="https://www.svgrepo.com/show/167358/cross.svg"
                alt=""
                className="faq-cross"
              />
            </summary>
            {isVisible ? (
              <div className="drop-down-menu">
                <NavLink
                  to="/cours_popping"
                  className="hover-nav"
                  onClick={handleChangeNav}
                >
                  <h1>Popping</h1>
                </NavLink>
                <NavLink
                  to="/cours_locking"
                  className="hover-nav"
                  onClick={handleChangeNav}
                >
                  <h1>Locking</h1>
                </NavLink>
                <NavLink
                  to="/cours_new-school"
                  className="hover-nav"
                  onClick={handleChangeNav}
                >
                  <h1>New School</h1>
                </NavLink>
                <NavLink
                  to="/cours_dancehall"
                  className="hover-nav"
                  onClick={handleChangeNav}
                >
                  <h1>Dancehall</h1>
                </NavLink>
              </div>
            ) : null}
          </details>

          <NavLink
            to="/planning_tarifs"
            className="hover-nav"
            onClick={handleChangeNav}
          >
            <h1>Planning/Tarifs</h1>
          </NavLink>

          <NavLink
            to="/intervenants"
            className="hover-nav"
            onClick={handleChangeNav}
          >
            <h1>Intervenants</h1>
          </NavLink>

          <NavLink
            to="/contact"
            className="hover-nav"
            onClick={handleChangeNav}
          >
            <h1>Contact</h1>
          </NavLink>

          <NavLink
            to="/inscription"
            className="hover-nav"
            onClick={handleChangeNav}
          >
            <h1>Inscription</h1>
          </NavLink>
        </ul>
      </nav>
      {/* <button type="button" className="login-btn" onClick={handleNavigate}>
        <img src="https://www.svgrepo.com/show/219333/login.svg" alt="" />
      </button> */}
    </div>
  );
}

export default Navbar;
