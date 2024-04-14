import "./contact.scss";
import check from "../../../assets/Icons/check.png";
import whatsapp from "../../../assets/Icons/whatsapp.png";
import { PlaneSvg } from "./PlaneSvg/planeSvg";
import emailIcon from "../../../assets/Icons/email.png";
// import emailjs from "@emailjs/browser";
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
    <div id="contact" className="page-container">
      <div className="card md:mt-20 blue-bg">
        <div className=" ml-4 mr-4 mt-6 flex flex-col min-[400px]:m-8 min-[546px]:m-9 min-[640px]:m-9 sm:m-10 sm:mt-10 md:flex-row md:mt-8 min-[843px]:mt-12 lg:mt-10 xl:mt-8 xl:m-12">
          <div className="left-side w-full md:w-1/2">
            <h2 className="card-title text-xl sm:text-2xl sm:mb-10 lg:text-3xl xl:text-4xl">
              Escriba su correo y le contactaremos enseguida.
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
          <div className="right-side w-full md:w-1/2 text-end relative mt-8 sm:mt-4 md:mt-0">
            <div className="absolute left-0 mt-2 md:left-auto md:right-0">
              <p className="mb-4 flex justify-start font-semibold items-center">
                <img className="mr-2 " src={whatsapp} alt="whatsapp" />
                <span className="text-sm lg:text-lg">????????</span>
              </p>
              <p className="mb-4 flex justify-start font-semibold items-center">
                <img className="mr-2 " src={check} alt="check" />
                <span className="text-sm lg:text-lg">Disponibles las 24/7</span>
              </p>
              <p className="mb-4 flex justify-start font-semibold items-center">
                <img className="mr-2 " src={emailIcon} alt="email" />
                <span className="text-sm lg:text-lg">
                  techvantageconsulting.team@gmail.com
                </span>
              </p>
            </div>
          </div>
          <PlaneSvg />
        </div>
      </div>
    </div>
  );
};
