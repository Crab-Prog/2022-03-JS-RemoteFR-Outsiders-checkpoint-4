import React from 'react';
import "@styles/Header.scss";
import smoke from "@assets/videos/smoke.mp4";

const Header = () => {
  return (
    <section id='header-part'>
        <video src={smoke} autoPlay muted loop ></video>
        <h1>Ecole des danses actuelles</h1>
    </section>
  )
}

export default Header