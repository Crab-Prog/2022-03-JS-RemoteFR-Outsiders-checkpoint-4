import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, notifySuccess, notifyError } from "@services/service";
import "react-toastify/dist/ReactToastify.css";
import "@styles/Login.scss";

function Login() {
  const ENDPOINT = "/auth/login";

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post(ENDPOINT, user, {
        withCredentials: true,
      })
      .then(() => {
        notifySuccess("Vous êtes connecté!");
        setTimeout(() => {
          navigate("/inscription");
        }, 1500);
      })
      .catch((err) => {
        notifyError("Vous n'avez pas réussi à vous connecter.");
        console.warn(err);
      });
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="login-page-container w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Identifiant
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
            Mot de passe
          </label>
          <input
            name="password"
            onChange={handleChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-red-500 text-xs italic">
            Merci de taper un mot de passe.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Connexion
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/"
          >
            Mot de passe oublié?
          </a>
        </div>
      </form>
    </section>
  );
}

export default Login;
