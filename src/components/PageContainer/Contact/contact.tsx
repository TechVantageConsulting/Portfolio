import "./contact.scss";
import check from "../../../assets/Icons/check.png";
import whatsapp from "../../../assets/Icons/whatsapp.png";
import { PlaneSvg } from "./PlaneSvg/planeSvg";
import emailIcon from "../../../assets/Icons/email.png";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export const Contact = () => {
  const [email, setEmail] = useState<string>("");

  const sendEmail = (event: any) => {
    event.preventDefault();

    const templateParams = {
      // configured on emailjs template
      email: email,
    };

    emailjs
      .send(
        "contact_service",
        "template_emtaik8",
        templateParams,
        "pN2jajpXuKbF1WLG4"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="card mt-8 md:mt-20 blue-bg">
      <div className="card-body flex flex-col md:flex-row">
        <div className="left-side w-full md:w-1/2">
          <h2 className="card-title">
            Let's talk about your goals! We will get back to you asap.
          </h2>
          <label className="form-control w-full max-w-md">
            <form className="flex-center">
              <input
                type="text"
                placeholder="Su correo electrónico"
                className="input input-bordered w-full max-w-md"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <button
                onClick={sendEmail}
                className="btn custom-bg-button ml-2 w-24"
              >
                ENVIAR
              </button>
            </form>
          </label>
        </div>
        <div className="right-side w-full md:w-1/2 text-end relative mt-8 md:mt-0">
          <div className="absolute left-0 md:left-auto md:right-0">
            <p className="mb-4 flex justify-start font-semibold">
              <img className="mr-2" src={whatsapp} alt="whatsapp" />
              <span>Llamanos al: 423423423</span>
            </p>
            <p className="mb-4 flex justify-start font-semibold">
              <img className="mr-2" src={check} alt="check" />
              <span>Disponibles las 24/7</span>
            </p>
            <p className="mb-4 flex justify-start font-semibold">
              <img className="mr-2" src={emailIcon} alt="email" />
              <span>Email: bladfsabla@gmail.com</span>
            </p>
          </div>
        </div>
        <PlaneSvg />
      </div>
    </div>
  );
};
