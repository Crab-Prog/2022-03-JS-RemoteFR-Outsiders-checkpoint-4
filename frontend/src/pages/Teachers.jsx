import React from "react";

import djamel from "@assets/images/djamel2.jpg";
import eve from "@assets/images/eve2.jpg";
import deem from "@assets/images/deem2.jpg";
import sophie from "@assets/images/sophie-herve2.jpg";
import mariel from "@assets/images/mariel2.jpg";

import "@styles/Teachers.scss";

function Teachers() {
  return (
    <section id="teachers-gallery">
      <div className="teacher-hover">
        <p className="see-hover">Eve professeur de streetlady et pilate</p>
        <img className="" src={djamel} alt="" />
      </div>
      <div className="teacher-hover">
        <p className="see-hover">Eve professeur de streetlady et pilate</p>
        <img className="" src={eve} alt="" />
      </div>
      <div className="teacher-hover">
        <p className="see-hover">Eve professeur de streetlady et pilate</p>
        <img className="" src={deem} alt="" />
      </div>
      <div className="teacher-hover">
        <p className="see-hover">Eve professeur de streetlady et pilate</p>
        <img className="" src={sophie} alt="" />
      </div>
      <div className="teacher-hover">
        <p className="see-hover">Eve professeur de streetlady et pilate</p>
        <img className="" src={mariel} alt="" />
      </div>
    </section>
  );
}

export default Teachers;
