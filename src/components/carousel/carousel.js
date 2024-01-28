import React, { useState } from 'react';
import Card from '../card1/card1';

const Carousel = ({ cardData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardWidth = 18; // Largeur d'une carte en rem
  const cardMargin = 18; // Marge entre les cartes en rem

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === cardData.length - 1 ? 0 : prevSlide + 1
    );
    setHoveredCard(null); // Reset hovered card when changing slide
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? cardData.length - 1 : prevSlide - 1
    );
    setHoveredCard(null); // Reset hovered card when changing slide
  };

  const arrowStyle = {
    cursor: 'pointer',
    fontSize: '24px',
    visibility: 'visible',
    zIndex: 2,
    color: '#D170C2', // Changer la couleur de la flèche à #3431A6
  };

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(${-currentSlide * (cardWidth + cardMargin)}rem)`,
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={card.id}
            style={{
              flex: '0 0 auto',
              width: `20rem`,
              marginRight: `137rem`,
            }}
            onMouseEnter={() => setHoveredCard(card.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card
              imageSrc={card.imageSrc}
              title={card.title}
              isHovered={hoveredCard === card.id}
            />
          </div>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          padding: '0 10px',
        }}
      >
        <div
          onClick={prevSlide}
          style={{
            ...arrowStyle,
            visibility: currentSlide === 0 ? 'hidden' : 'visible',
          }}
        >
          &#9664; {/* Flèche gauche */}
        </div>
        <div
          onClick={nextSlide}
          style={{
            ...arrowStyle,
            visibility: currentSlide === cardData.length - 1 ? 'hidden' : 'visible',
          }}
        >
          &#9654; {/* Flèche droite */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;