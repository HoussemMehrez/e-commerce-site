import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card1.css';
const cardData = [
  {
    id: 1,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer1',

  },
  {
    id: 2,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer 2',
  
  },
  {
    id: 3,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer3',
   
  },
  {
    id: 3,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer3',
   
  }, {
    id: 3,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer3',
   
  }, {
    id: 3,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer3',
   
  }, {
    id: 3,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer3',
    
   
  },
  {
    id: 3,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer3',
   
  },
  {
    id: 3,
    imageSrc: 'pc.png',
    iconeSrc: 'heart.png',
    title: 'pc gamer3',
   
  },
  
];

function CardList() {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
    {cardData.map((card) => (
      <Card
        key={card.id}
        style={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position:'relative'  }}
      >
        <Card.Img id='p3' src={card.imageSrc} alt={card.title} />
        <Card.Img id='p25' src={card.iconeSrc} alt={card.iconeSrc} />
        <Card.Body>
          <Card.Title id='p12'>{card.title}</Card.Title>
          <Button  id='p11'>
            <img src='cart.png' alt='cart' width='18%' />
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    ))}
  </div>
      
  );
}

export default CardList;