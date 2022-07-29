import React from "react";
import YoutubeVideo from "@components/YoutubeVideo";
import "@styles/Popping.scss";
import pink from "@assets/images/pink.webp";

function Dancehall() {
  return (
    <section className="lessons-general flex flex-col items-center">
      <h1 className="text-8xl text-white pb-8">Dancehall</h1>
      <div className="popping-text">
        <img
          src={pink}
          alt="Dancehall man in multicolor"
          title="You found my small easter egg :p"
        />
        <p>
          Le New style puise son inspiration dans diverses danses : africaine,
          la tap dance (claquettes), la danse classique et le jazz.
          <br />
          C’est en réalité un mélange de différents styles tels que la hype, le
          boogaloo, le tétris… Cette danse est caractérisée par son côté
          «smooth» c’est-à-dire fluide.
          <br />
          Ce style est très en vogue dans les clips actuels de R’n’B, Hip Hop et
          Soul.
        </p>
      </div>
      <YoutubeVideo embedId="uICTVU6jBc4" />
    </section>
  );
}

export default Dancehall;
