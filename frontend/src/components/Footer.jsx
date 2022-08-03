import React from "react";
import "@styles/Footer.scss";

import facebook from "@assets/images/facebook.webp";
import instagram from "@assets/images/instagram.webp";
import youtube from "@assets/images/youtube.webp";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <a
          href="https://www.facebook.com/insschool63"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://instagram.com/ins.school"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.youtube.com/user/insschool"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="youtube" />
        </a>
        <p className="footer-text">© 2022 - Ophelie Coudert</p>
      </div>
    </footer>
  );
}

export default Footer;
