import React from "react";
import smoke from "@assets/videos/smoke.webm";
import { useNavigate } from "react-router-dom";
import "@styles/Header.scss";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/intervenants");
  };
  return (
    <section id="header-part">
      <video src={smoke} autoPlay muted loop className="w-full" />
      <div className="header-container-text">
        <h1 className="text-sm md:text-4xl lg:text-8xl">INS</h1>
        <p>L’école des danses actuelles</p>
        <button
          onClick={handleClick}
          type="button"
          className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-sm shadow"
        >
          Découvrir
        </button>
      </div>
    </section>
  );
}

export default Header;
