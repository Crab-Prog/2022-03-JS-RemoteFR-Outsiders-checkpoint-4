import React, { useState, useEffect } from "react";
import { api } from "@services/service";
import "@styles/ListMembers.scss";

function ListMembers({ ENDPOINT }) {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    api
      .get(`${ENDPOINT}`)
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, []);

  return (
    <section id="list-members">
      {members.map((member, i) => {
        return (
          <div i={i} className="member-line">
            <p>
              {member.first_name} - {member.last_name} - {member.cellphone}{" "}
              {member.username}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default ListMembers;
