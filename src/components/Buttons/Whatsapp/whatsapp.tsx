import { useState, useEffect } from "react";
import "./whatsapp.scss";
import WhatsappSVG from "./whatsapp.svg";

export const Whatsapp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(
    "https://web.whatsapp.com/send?phone=+34666006600&amp;text=Estoy%20interesado%20en%20sus%20servicios%20digitales%20.%20https%3A%2F%2Fwww.techvantageconsulting.com"
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      setIsMobile(
        "https://wa.me/+34666006600?text=Estoy%20interesado%20en%20sus%20servicios%20digitales%20.%20https%3A%2F%2Fwww.techvantageconsulting.com"
      );
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <a
          className="whatsapp btn custom-bg-button"
          href={isMobile}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <img src={WhatsappSVG} alt="Up Arrow" className="up-arrow" />
        </a>
      )}
    </>
  );
};
