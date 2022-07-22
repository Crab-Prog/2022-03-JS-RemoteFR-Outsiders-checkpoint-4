import React, { useState, useEffect, useContext } from "react";
import { api } from "@services/service";
import ExportContext from "@contexts/context";
import "@styles/ListMembers.scss";

function ListMembers({ ENDPOINT }) {
  const [members, setMembers] = useState([]);
  const { isUpdate } = useContext(ExportContext.GeneralContext);
  useEffect(() => {
    api
      .get(`${ENDPOINT}`)
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.error(console.error(err));
      });
  }, [isUpdate]);

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
