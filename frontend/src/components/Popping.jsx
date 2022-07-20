import React from "react";
import YoutubeVideo from "@components/YoutubeVideo";
import "@styles/Popping.scss";

function Popping() {
  return (
    <section className="lessons-general flex flex-col items-center">
      <h1 className="text-8xl text-white pb-8">Popping</h1>
      <div className="popping-text">
        <img
          src="https://cdn.pixabay.com/photo/2019/03/28/17/08/man-4087543_960_720.jpg"
          alt="popping man in yellow"
        />
        <p>
          Le Popping est une danse popularisée par les Electric Boogaloo’s dont
          le principe de base est la contraction et la décontraction des muscles
          en rythme.
          <br />
          Cette danse a fait ses premiers pas sur la musique funk vers la fin
          des années 70 / Début des années 80.
          <br />
          À présent, plusieurs autres styles de musiques comme le hip-hop, le
          G-Funk ou l’électro sont utilisés.
          <br />
          Parmi les mouvements les plus populaires, nous pouvons citer le
          Twisto-Flex qui consiste à tourner séparément la tête, le corps et les
          jambes dans des ordres différents.
          <br />
          Un autre de ces mouvements est le Neck-o-Flex, qui lui est très
          similaire.
          <br />
          Il y a également les techniques de gliding exploitées par Michael
          Jackson, soit le moonwalk et le airwalk.
        </p>
      </div>
      <YoutubeVideo embedId="SarreBfTNM4" />
    </section>
  );
}

export default Popping;
