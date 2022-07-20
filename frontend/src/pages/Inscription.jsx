import React, { useState } from "react";
import "@styles/Inscription.scss";

function Inscription() {
  const [registration, setRegistration] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    // api
    //   .post("http://localhost:5500/registration")
    //   .then(() => {
    //       notifySuccess(
    //         "Votre pré-inscription a été enregistrée. Un administrateur vous contactera bientôt pour vous informer de l'avancement de votre dossier"
    //       )
    //   })
    //   .catch(() => {
    //     notifyError(
    //       "Votre pré-inscription n'a pas pu aboutir. Veuillez vérifier les champs à remplir avant de soumettre à nouveau votre pré-inscription"
    //     );
    //   });
  };

  function handleChange(e) {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <section id="inscription">
      <div className="box-container-inscription">
        <h1>Inscription</h1>
        <form
          id="form-inscription"
          action="#"
          onSubmit={handleSubmit}
          method="post"
        >
          <div className="form-inscription w-full">
            <div className="flex row justify-around">
              <div>
                <label htmlFor="registration_lastname" className="">
                  <p>Nom</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
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
                  name="last_name "
                  id="registration_name"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="flex row justify-around">
              <div className="">
                <label htmlFor="registration_birthday" className="">
                  <p>Date de naissance</p>
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="birth_date"
                  id=""
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="registration_email" className="">
                  <p>E-mail(facultatif)</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="registration_email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex row justify-around">
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
            </div>
            <div className="flex row justify-around">
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
                  <p>Téléphone</p>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="registration_phone"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex row justify-around">
              <div className="">
                <label htmlFor="registration_phone_father" className="">
                  <p>Portable père</p>
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
                  <p>Portable mère</p>
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

            <div className="">
              <label htmlFor="hasDanced" className="formbuilder-radio">
                Avez-vous deja pratique la danse ?
              </label>

              <div className="radio-group">
                <div className="">
                  <input
                    name="hasDanced"
                    id="radio-group-0"
                    value="1"
                    type="radio"
                  />
                  <label htmlFor="radio-group-0">oui</label>
                </div>

                <div className="">
                  <input
                    name="hasDanced"
                    id="radio-group-1"
                    value="0"
                    type="radio"
                    checked="checked"
                  />
                  <label htmlFor="radio-group-1">non</label>
                </div>
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
              >
                <option value="POSTER_FLYER" selected="selected" id="0">
                  Affiches, Flyers
                </option>
                <option value="INTERNET" id="1">
                  Internet
                </option>
                <option value="WORD_OF_MOUTH" id="2">
                  Bouche a oreille
                </option>
                <option value="ADVERTISING_PANEL" id="3">
                  panneau publicitaire
                </option>
              </select>
            </div>
            <div className="">
              <p id="">
                <p>Documents à fournir :</p>
                <ul>
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
              </p>
            </div>
            <div className="">
              <button type="submit" className="bg-white" name="" id="">
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Inscription;
