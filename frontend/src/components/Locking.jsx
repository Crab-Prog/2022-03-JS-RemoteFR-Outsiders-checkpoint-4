import React from "react";
import YoutubeVideo from "@components/YoutubeVideo";
import "@styles/Popping.scss";
import multicolor from "@assets/images/multicolor.jpg";

function Locking() {
  return (
    <section className="lessons-general flex flex-col items-center">
      <h1 className="text-sm md:text-4xl lg:text-8xl text-center text-white pb-8">
        Locking
      </h1>
      <div className="popping-text">
        <img src={multicolor} alt="Locking man in multicolor" />
        <p>
          Le Lockin’ ou Campbellocking est un type de danse funk inventé par Don
          Campbell au début des années 1970 et rattaché à la culture hip-hop.
          <br />
          Un des mouvements de base est le « pointage », de l’anglais pointing,
          c’est-à-dire le fait de pointer.
          <br />
          Il existe aussi plusieurs autres mouvements comme le Stop and go or
          Bus stop.
          <br />
          Le locking est beaucoup plus musical que le break dance, et est très
          expressif.
          <br />
          Il se danse principalement avec le bassin et les pointes. Les
          expressions du visage sont aussi très importantes.
        </p>
      </div>
      <YoutubeVideo embedId="BP7EtmcgYFY" />
    </section>
  );
}

export default Locking;
