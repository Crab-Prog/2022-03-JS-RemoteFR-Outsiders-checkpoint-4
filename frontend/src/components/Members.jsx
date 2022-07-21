import React, { useState, useEffect } from "react";
import { api } from "@services/service";

function Members() {
  const [members, setMembers] = useState();

  useEffect(() => {
    api
      .get("/members")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  return (
    <section className="">
      <h1>Membres de l'école</h1>
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

export default Members;
