import { useEffect, useRef, useState } from "react";
import aerticket from "../../../assets/Companies/aerticket.png";
import bde from "../../../assets/Companies/bde.png";
import ceu from "../../../assets/Companies/ceu.png";
import madrid from "../../../assets/Companies/comunidad-madrid.png";
import dkultura from "../../../assets/Companies/dkultura.png";
import navarra from "../../../assets/Companies/gobierno-navarra.png";
import telekom from "../../../assets/Companies/telekom.png";
import "./companies.scss";

// Definición de la lista de imágenes
const images = [
  { src: telekom, alt: "Descripción de la imagen 1" },
  { src: aerticket, alt: "Descripción de la imagen 2" },
  { src: bde, alt: "Descripción de la imagen 3" },
  { src: ceu, alt: "Descripción de la imagen 4" },
  { src: madrid, alt: "Descripción de la imagen 5" },
  { src: dkultura, alt: "Descripción de la imagen 6" },
  { src: navarra, alt: "Descripción de la imagen 7" },
  // Agrega más imágenes según sea necesario
];

export const Companies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideTrackRef = useRef<HTMLDivElement>(null);

  const imagesCount = images.length;
  const slideWidth = 225; // Ancho fijo de cada slide en px
  const gap = 140; // Espacio entre las imágenes en px

  useEffect(() => {
    const slideTrack = slideTrackRef.current;
    if (slideTrack) {
      const newPosition = -1 * (currentIndex * (slideWidth + gap));

      // Aplicar el desplazamiento inicial sin transición para evitar tirones
      slideTrack.style.transition = "none";
      slideTrack.style.transform = `translateX(${newPosition}px)`;

      // Solicitar la animación en el siguiente frame para aplicar la transición suave
      requestAnimationFrame(() => {
        slideTrack.style.transition = "transform 1s ease-in-out";
        slideTrack.style.transform = `translateX(${newPosition}px)`;
      });
    }
  }, [currentIndex, slideWidth, gap]);

  useEffect(() => {
    // Configurar el carrusel infinito
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCount);
    }, 3000); // Cambiar imagen cada 3 segundos

    return () => clearInterval(intervalId);
  }, [imagesCount]); // Se ejecuta cuando cambia la longitud del array de imágenes

  // Efecto para reiniciar el índice cuando se llega al final de las imágenes
  useEffect(() => {
    if (currentIndex === imagesCount) {
      setCurrentIndex(0); // Reiniciar al índice cero al llegar al final de las imágenes
    }
  }, [currentIndex, imagesCount]);

  return (
    <div className="slider">
      <div className="slide-track" ref={slideTrackRef}>
        {/* Mapear las imágenes con un duplicado para el carrusel infinito */}
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: slideWidth }}
            />
          </div>
        ))}
        {/* Duplicar las imágenes para el carrusel infinito */}
        {images.map((image, index) => (
          <div className="slide" key={index + imagesCount}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: slideWidth }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
