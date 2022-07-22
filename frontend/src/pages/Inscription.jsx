import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, notifySuccess, notifyError } from "@services/service";
import "@styles/Inscription.scss";
import "react-toastify/dist/ReactToastify.css";

function Inscription() {
  const [registration, setRegistration] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e, regist) => {
    e.preventDefault();
    api
      .post("/registration", regist)
      .then(() => {
        notifySuccess("Vous venez de vous pré-inscrire");
        navigate("/inscription");
      })
      .catch(() => {
        notifyError(
          "Votre pré-inscription n'a pas pu aboutir, merci de vérifier les champs."
        );
      });
  };

  function handleChange(e) {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section id="inscription">
      <h1 className="text-sm md:text-4xl lg:text-8xl text-center text-white pb-8">
        Inscription
      </h1>
      <div className="box-container-inscription">
        <form
          id="form-inscription"
          action="#"
          onSubmit={(e) => handleSubmit(e, registration)}
          method="post"
        >
          <div className="form-inscription">
            <div className="flex flex-col">
              <div>
                <label htmlFor="registration_lastname" className="">
                  <p>Nom</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  id="registration_lastname"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="">
                <label htmlFor="registration_name" className="">
                  <p>Prénom</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  id="registration_name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="registration_birthday" className="">
                  <p>Date de naissance</p>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="birth_date"
                  id="registration_birthday"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="registration_email" className="">
                  <p>E-mail (facultatif)</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="registration_email"
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="registration_adress" className="">
                  <p>Adresse</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="registration_adress"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="">
                <label htmlFor="registration_code" className="">
                  <p>Code Postal</p>
                </label>
                <input
                  type="text"
                  className="form-control w-20"
                  name="postal_code"
                  id="registration_code"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="">
                <label htmlFor="registration_city" className="">
                  <p>Ville</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="registration_city"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="">
                <label htmlFor="registration_phone" className="">
                  <p>Téléphone (facultatif)</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="registration_phone"
                  onChange={handleChange}
                />
              </div>

              <div className="">
                <label htmlFor="registration_phone_father" className="">
                  <p>Portable père (facultatif)</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cellphone_father"
                  id="registration_phone_father"
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <label htmlFor="registration_phone_mother" className="">
                  <p>Portable mère (facultatif)</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cellphone_mother"
                  id="registration_phone_mother"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="inscription-second">
            <div className="radio-group">
              <div className="">
                <fieldset className="registration-fieldset">
                  <legend>Avez-vous deja pratique la danse ?</legend>
                  <label htmlFor="hasDanced" className="">
                    <div>
                      <input
                        name="hasDanced"
                        id="radio-group"
                        value="1"
                        type="radio"
                        onClick={handleChange}
                      />
                      oui
                    </div>
                    <div>
                      <input
                        name="hasDanced"
                        id="radio-group"
                        value="0"
                        type="radio"
                        onClick={handleChange}
                      />
                      non
                    </div>
                  </label>
                </fieldset>
              </div>
            </div>

            <div className="">
              <label htmlFor="means_of_knowledge" className="">
                <p>Comment nous avez-vous connus ?</p>
              </label>
              <select
                className="form-control"
                name="means_of_knowledge"
                id="means_of_knowledge"
                onChange={handleChange}
              >
                <option value="" select="defaultValue">
                  --Choisir--
                </option>
                <option value="POSTER_FLYER" name="means_of_knowledge">
                  Affiches, Flyers
                </option>
                <option value="INTERNET" name="means_of_knowledge">
                  Internet
                </option>
                <option value="WORD_OF_MOUTH" name="means_of_knowledge">
                  Bouche a oreille
                </option>
                <option value="ADVERTISING_PANEL" name="means_of_knowledge">
                  panneau publicitaire
                </option>
              </select>
            </div>
            <div className="">
              <div id="">
                <ul>
                  <h2>Documents à fournir :</h2>
                  <li>1 certificat médical</li>
                  <li>2 photos d'identité</li>
                  <li>1 attestation d'assurance</li>
                  <li>
                    1 enveloppe timbrée (au nom et adresse de l'adhérent ou des
                    parents pour les mineurs)
                  </li>
                  <li>
                    Le règlement du forfait (possibilité de payer en trois fois
                    sans frais)
                  </li>
                </ul>
                <p>
                  Le règlement intérieur doit être signé et retourné lors de
                  l'inscription.
                </p>
              </div>
            </div>
            <button
              type="submit"
              className="text-white font-bold py-2 px-4 border rounded"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Inscription;
