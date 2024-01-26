import React, { useState } from 'react';
import './slider.css'; // Assurez-vous d'importer votre fichier CSS
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importez les icônes de flèches de Font Awesome

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider-slide">
        <div className="slider-image">
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </div>
        <div className="slider-arrows">
          <div className="slider-prev" onClick={prevSlide}>&#9664;</div>
          <div className="slider-next" onClick={nextSlide}>&#9654;</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;