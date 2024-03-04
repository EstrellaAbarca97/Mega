import React, { useState, useEffect } from 'react';
import './carrusel.css'; // Asegúrate de que esta importación apunte al archivo correcto
import image1 from './img/img1.png';
import image2 from './img/img2.png';
import image3 from './img/img3.png';

const Carrusel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % 3); // Ajusta el número 3 al número total de slides
    }, 3000); // Cambia el tiempo de cambio de slide según sea necesario

    return () => clearInterval(interval);
  }, []); // Agrega nextSlide a la lista de dependencias si es necesario

  const slides = [image1, image2, image3]; // Array con las imágenes

  return (
    <div className="carrusel">
      <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
    </div>
  );
};

export default Carrusel;



