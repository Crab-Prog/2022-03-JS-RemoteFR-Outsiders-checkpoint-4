import React, { useState } from "react";

import position from "@assets/svg/position.svg";
import email from "@assets/svg/email.svg";
import phone from "@assets/svg/phone.svg";

import "@styles/Contact.scss";
import { api, notifySuccess, notifyError } from "@services/service";

function Contact() {
  const [messageValue, setMessageValue] = useState({});

  const handleChangeMessage = (event) => {
    setMessageValue({
      ...messageValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api
      .post("/mail", messageValue)
      .then(() => {
        notifySuccess(
          "Votre message a bien été envoyé. Un administrateur vous contactera bientôt."
        );
      })
      .catch(() => {
        notifyError("Votre message n'a pas pu être envoyé.");
      });
  };

  return (
    <section id="contact-form">
      <form method="post">
        <div className="register_form">
          <h1>Nous vous invitons à remplir ce formulaire</h1>
          <div>
            <label htmlFor="asso_email">
              <p>Email</p>
              <input
                type="email"
                name="email"
                required
                id="asso_email"
                onChange={handleChangeMessage}
              />
            </label>
          </div>
          <div className="input-form">
            <label htmlFor="asso_name">
              <p>Sujet</p>
              <input
                type="text"
                id="asso_name"
                name="subject"
                required
                onChange={handleChangeMessage}
              />
            </label>
          </div>

          <div className="form_textarea">
            <label htmlFor="message">
              <p>Votre message</p>

              <textarea
                id="message"
                name="message"
                required
                onChange={handleChangeMessage}
              />
            </label>
          </div>
          <button onClick={handleSubmit} type="submit" className="button-blue">
            hello here
          </button>
        </div>
      </form>
      <div className="infos-contact">
        <h2 className="text-6xl text-black pb-4">Infos</h2>

        <div>
          <img src={email} alt="icon d'une enveloppe" />
          <p>infos.insschool@gmail.com</p>
        </div>
        <div>
          <img src={phone} alt="icon d'un telephone" />
          <p>06.22.87.00.53</p>
        </div>
        <div>
          <img src={position} alt="icon d'une position" />
          <p>
            INS School
            <br />
            29 rue Jules Verne
            <br />
            63100 Clermont-Ferrand (ZI Brézet)
            <br />
            ligne 10 Arrêt Gutenberg
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
