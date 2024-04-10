import { useState, useEffect } from "react";
import "./backToTop.scss";
import UpArrowSVG from "./up-arrow.svg";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="back-to-top btn custom-bg-button"
          onClick={scrollToTop}
          title="Go to top"
        >
          <img src={UpArrowSVG} alt="Up Arrow" className="up-arrow" />
        </button>
      )}
    </>
  );
};
