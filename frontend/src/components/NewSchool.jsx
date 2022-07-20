import React from "react";
import YoutubeVideo from "@components/YoutubeVideo";
import "@styles/Popping.scss";
import blue from "@assets/images/blue.jpg";

function NewSchool() {
  return (
    <section className="lessons-general flex flex-col items-center">
      <h1 className="text-8xl text-white pb-8">NewSchool</h1>
      <div className="popping-text">
        <img src={blue} alt="NewSchool man in multicolor" />
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
      <YoutubeVideo embedId="F128OIy1u20" />
    </section>
  );
}

export default NewSchool;
