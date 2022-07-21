import React, { useState, useEffect } from "react";
import { api } from "@services/service";

function PreRegister() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    api
      .get("/registration")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  return (
    <section className="">
      <h1>Membres qui ce sont pre-inscrit</h1>
      {members.map((member, i) => {
        return (
          <div i={i}>
            <p>{member.first_name}</p>
          </div>
        );
      })}
    </section>
  );
}

export default PreRegister;
