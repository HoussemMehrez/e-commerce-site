import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { goToNextSlide, goToPrevSlide } from '../../redux/slices/slider'; // Importez les actions du slice Redux
import './slider.css';


const Slider = () => {
  const currentIndex = useSelector(state => state.slider.currentIndex); // Sélectionner l'index actuel depuis le state Redux
  const images = useSelector((store) => store?.slider?.images); // Sélectionner les images depuis le state Redux
  const dispatch = useDispatch(); // Initialiser le dispatch

  const prevSlide = () => {
    dispatch(goToPrevSlide()); // Dispatch l'action pour passer à la diapositive précédente
  };

  const nextSlide = () => {
    dispatch(goToNextSlide()); // Dispatch l'action pour passer à la diapositive suivante
  };

  return (
    <div className="slider-container">
      <div className="slider-slide">
        <div className="slider-image">
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </div>
        <div className="slider-arrows">
        <div className="slider-prev" onClick={prevSlide}>{'<'}</div>
          <div className="slider-next" onClick={nextSlide}>{'>'}</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
