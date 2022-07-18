import React from 'react';
import "@styles/Navbar.scss";

const Navbar = () => {
  return (
    <div className="menu-wrapper" >
    <nav className="navigation">
      <ul className="navigation-bar">
        
          <li>
            <a
              href="#skills-part"
              className="hover-nav"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover-nav"
            >
              Cours
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover-nav"
            >
              Planning/Tarifs
            </a>
          </li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar