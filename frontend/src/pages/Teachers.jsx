import React from "react";

import djamel from "@assets/images/djamel2.jpg";
import eve from "@assets/images/eve2.jpg";
import deem from "@assets/images/deem2.jpg";
import sophie from "@assets/images/sophie-herve2.jpg";
import mariel from "@assets/images/mariel2.jpg";

import "@styles/Teachers.scss";

function Teachers() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-sm md:text-4xl lg:text-8xl text-center text-white pb-8">
        Intervenants
      </h1>
      <div id="teachers-gallery">
        <div className="teacher-hover">
          <div className="see-hover">
            <p>
              Djamel professeur de danse polyvalent, Dj et beatmaker. Il
              pratique depuis plus de 20ans et à de l'expérience en matière
              d'événementiel et de show.
            </p>
          </div>
          <img className="" src={djamel} alt="" />
        </div>
        <div className="teacher-hover">
          <div className="see-hover">
            <p>
              Eve professeure de Streetlady et Pilate : Elle a une personnalitée
              explosive ! Toujours à l'écoute elle crée des chorégraphies
              originales. Laissez parler la femme qui est en vous!
            </p>
          </div>
          <img className="" src={eve} alt="" />
        </div>
        <div className="teacher-hover">
          <div className="see-hover">
            <p>
              Deem professeur de BreakDance et amoureux des rythmes, sa passion
              se transmet à travers une étude de la musique pour toujours aller
              plus loins dans le mouvement.
            </p>
          </div>
          <img className="" src={deem} alt="" />
        </div>
        <div className="teacher-hover">
          <div className="see-hover">
            <p>
              Sophie & Hervé professeurs de Kizomba. Ils garantissent de la
              bonne humeur, sont patients et impliqués! Parfait pour apprendre
              une danse de couple!
            </p>
          </div>
          <img className="" src={sophie} alt="" />
        </div>
        <div className="teacher-hover">
          <div className="see-hover">
            <p>
              Mariel professeur de House dance et Locking, soyez prêt à
              transpirer parce qu'il vous mènera au bout de vos forces !{" "}
            </p>
          </div>
          <img className="" src={mariel} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Teachers;
