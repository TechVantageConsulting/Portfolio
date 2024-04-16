import "./heroSection.scss";
import compound from "../../../assets/HeroSection/compound-2.png";
import { useEffect } from "react";

export const HeroSection = () => {
  useEffect(() => {
    const typedText = document.querySelector(".typed-text");
    const cursor = document.querySelector(".cursor");

    const textArray = ["Tu presencia digital", "Tu negocio", "Tu ecommerce"];

    let textArrayIndex = 0;
    let charIndex = 0;

    const erase = () => {
      // TODO: this if removes ts check for null on cursor or typedText
      // find a less hacky way
      if (!cursor || !typedText) {
        return;
      }

      if (charIndex > 0) {
        cursor.classList.remove("blink");
        typedText.textContent = textArray[textArrayIndex].slice(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, 80);
      } else {
        cursor.classList.add("blink");
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
          textArrayIndex = 0;
        }
        setTimeout(type, 1000);
      }
    };

    const type = () => {
      // TODO: this if removes ts check for null on cursor or typedText
      // find a less hacky way
      if (!cursor || !typedText) {
        return;
      }

      if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursor.classList.remove("blink");
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 120);
      } else {
        cursor.classList.add("blink");
        setTimeout(erase, 1000);
      }
    };

    type();
  }, []);

  return (
    <section className="page-container heroSection p-4 mt-8 sm:mt-12 lg:mt-16 xl:mt-24">
      <h1 className="text-4xl font-extrabold sm:text-5xl sm:font-bold md:text-6xl lg:text-7xl">
        Construyendo Online
      </h1>
      <h2 className="text-4xl font-extrabold sm:text-5xl sm:font-bold sm:mt-2 md:text-6xl md:mt-8 md:mb-10 lg:text-7xl">
        <span className="typed-text"></span>
        <span className="cursor blink">&nbsp;</span>
      </h2>
      <p className="mt-12 text-center text-xl w-4/5 md:w-3/4 md:text-3xl">
        Desarrollamos la presencia digital de tu negocio desde cero, diseñando
        sitios web personalizados que reflejan la identidad de tu marca y se
        conectan con tu audiencia de manera efectiva.
      </p>
      <div className="text-center mt-8">
        <a className="btn custom-bg-button text-lg" href="#contact">
          HABLEMOS
        </a>
      </div>
      <div className="mt-14 md:mt-28">
        <img src={compound} alt="compound" />
      </div>
      <h3 className="pt-10 font-bold text-left text-3xl sm:text-4xl sm:text-center sm:w-3/4 md:w-3/4 lg:w-2/3">
        Colaboramos con empresas del mundo entero, sin importar el ámbito, para
        hacer realidad sus ideas.
      </h3>
    </section>
  );
};
