import React from "react";
import schedule from "@assets/images/planning-2022-scaled.jpg";
import price from "@assets/images/planning-tarif.jpg";
import "@styles/Schedule.scss";

function Schedule() {
  return (
    <section id="schedule-gallery">
      <img className="w-full" src={schedule} alt="" />
      <img className="w-full" src={price} alt="" />
    </section>
  );
}

export default Schedule;
