import React from "react";
import smoke from "@assets/videos/smoke.mp4";
import "@styles/Header.scss";

function Header() {
  return (
    <section id="header-part">
      <video src={smoke} autoPlay muted loop />
      <h1>Ecole des danses actuelles</h1>
    </section>
  );
}

export default Header;
