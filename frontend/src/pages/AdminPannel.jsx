import React from "react";
import ListMembers from "@components/ListMembers";

import "@styles/AdminPannel.scss";
import ButtonAddUser from "@components/ButtonAddUser";

function AdminPannel() {
  return (
    <section id="admin-pannel">
      <h1 className="text-8xl text-white pb-8">Admin pannel</h1>
      <div className="admin-container">
        <div className="admin-details">
          <details className="user-list">
            <summary className="listTitle"> Membres de cette annee</summary>
            <ListMembers ENDPOINT="/members" />
          </details>
        </div>

        <div className="admin-details">
          <details className="user-list">
            <summary className="listTitle">
              Membres qui ce sont pre-inscrit
            </summary>
            <ListMembers ENDPOINT="/registration" />
          </details>
        </div>

        <div className="admin-details">
          <details className="user-list">
            <summary className="listTitle">Utilisateurs super pouvoir</summary>
            <ListMembers ENDPOINT="/user" />
          </details>
        </div>
      </div>
      <ButtonAddUser />
    </section>
  );
}

export default AdminPannel;
