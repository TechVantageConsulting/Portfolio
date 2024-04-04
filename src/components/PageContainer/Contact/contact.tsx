import "./contact.scss";
import check from "../../../assets/Icons/check.png";
import whatsapp from "../../../assets/Icons/whatsapp.png";
import email from "../../../assets/Icons/email.png";
import { PlaneSvg } from "./PlaneSvg/planeSvg";

export const Contact = () => {
  return (
    <div className="card mt-20 blue-bg">
      <div className="card-body flex flex-row">
        <div className="left-side w-1/2">
          <h2 className="card-title">
            Let's talk about your goals! We will get back to you asap.
          </h2>
          <label className="form-control w-full max-w-md">
            <form className="flex-center">
              <input
                type="text"
                placeholder="Su correo electrónico"
                className="input input-bordered w-full max-w-md"
              />
              <button className="btn custom-bg-button ml-2 w-24">ENVIAR</button>
            </form>
          </label>
        </div>
        <div className="right-side w-1/2 text-end relative">
          <div className="absolute right-0">
            <p className="mb-4 flex justify-start font-semibold">
              <img className="mr-2" src={whatsapp} alt="whatsapp" />
              <span>Llamanos al: 423423423</span>
            </p>
            <p className="mb-4 flex justify-start font-semibold">
              <img className="mr-2" src={check} alt="check" />
              <span>Disponibles las 24/7</span>
            </p>
            <p className="mb-4 flex justify-start font-semibold">
              <img className="mr-2" src={email} alt="email" />
              <span>Email: bladfsabla@gmail.com</span>
            </p>
          </div>
        </div>
        <PlaneSvg />
      </div>
    </div>
  );
};
