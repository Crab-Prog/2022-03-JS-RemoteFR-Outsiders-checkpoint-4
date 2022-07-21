import React, { useState, useContext } from "react";
import { api, notifySuccess, notifyError } from "@services/service";
import ExportContext from "@contexts/context";

function ButtonAddUser() {
  const [users, setUsers] = useState([]);
  const { isUpdate, setIsUpdate } = useContext(ExportContext.GeneralContext);
  function handleChange(e) {
    setUsers({
      ...users,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post(`/auth/register`, users)
      .then((res) => {
        setUsers(res.data);
        setIsUpdate(!isUpdate);
        notifySuccess("Vous venez d'ajouter un nouvel utilisateur");
      })
      .catch((err) => {
        notifyError(
          "L'utilisateur n'a pas pû être ajouté, merci de recommencer."
        );
        console.error(console.error(err));
      });
  };

  return (
    <section className="login-page-container w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        method="post"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Choisir un identifiant
          </label>
          <input
            name="username"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Pseudo"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Choisir un mot de passe
          </label>
          <input
            name="password"
            onChange={handleChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            ajouter un user
          </button>
        </div>
      </form>
    </section>
  );
}

export default ButtonAddUser;
