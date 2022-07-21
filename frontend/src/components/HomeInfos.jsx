import React from "react";
import years from "@assets/images/10years.png";
import "@styles/HomeInfos.scss";
import dance1 from "@assets/images/dance1.jpg";
import dance5 from "@assets/images/dance5.jpg";
import dance4 from "@assets/images/dance4.jpg";

function HomeInfos() {
  return (
    <section id="home-infos-container">
      <div className="home-infos-box">
        <img src={years} alt="10 ans d'existance" />
        <div>
          <h1>10 ans d'expérience</h1>
          <p>
            {" "}
            INS School est le premier centre dans son genre de la région. D’une
            superficie de 230m2, composé de deux salles de danse de 80m² et
            60m², c’est le lieu idéal pour recevoir un enseignement riche et
            diversifié.
          </p>
        </div>
      </div>
      <div className="home-images">
        <img src={dance1} alt="popping ins show 2022" className="i-1" />
        <img src={dance5} alt="popping Soul step show 2022" className="i-2" />
        <img src={dance4} alt="popping street lady show 2022" className="i-3" />
      </div>
      <div className="bg-white" />
    </section>
  );
}

export default HomeInfos;
