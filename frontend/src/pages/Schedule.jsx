import React from "react";
import schedule from "@assets/images/planning-2022-scaled.webp";
import price from "@assets/images/planning-tarif.webp";

import pdfTarif from "@assets/pdf/Plaquette-2022.pdf";
import pdfPlanning from "@assets/pdf/planning-2022.pdf";
import "@styles/Schedule.scss";

function Schedule() {
  return (
    <div id="sch-1">
      <h1 className="text-sm md:text-4xl lg:text-8xl text-center text-white pb-8">
        Planning/Tarifs
      </h1>
      <section className="schedule-gallery flex justify-around mt-8">
        <div className="schedule-img max-w-sm rounded shadow-lg bg-white overflow-hidden">
          <img
            className=" w-full"
            src={schedule}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 my-4 ">
            <div className="font-bold text-xl mb-2">Planning 2021-2022</div>
            <p className="text-gray-700 text-base">
              Retrouvez les cours de cette année, du lundi au vendredi!
              <br />
              Adapté pour les enfants et pour les adultes, il y en a pour tous
              les goûts.
            </p>
          </div>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center w-full"
          >
            <a href={pdfPlanning} download className="button-hover flex">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Planning
            </a>
          </button>
        </div>
        <div className="schedule-img max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img className="w-full" src={price} alt="Sunset in the mountains" />
          <div className="px-6 py-4 my-4">
            <div className="font-bold text-xl mb-2">Tarifs 2021-2022</div>
            <p className="text-gray-700 text-base">
              Plaquette des tarifs. Suite à la pandémie mondiale, de nouveaux
              abonnements on été créé: trimestriel, annuel, au mois ou au
              ticket! Possibilté de régler en CB, chèque ou espèce.
            </p>
          </div>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mb-2 rounded inline-flex items-center w-full"
          >
            <a href={pdfTarif} download className="button-hover flex">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Tarifs
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Schedule;
