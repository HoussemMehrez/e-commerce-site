import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { heartOutline, cartOutline ,heart} from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useFavorites } from '../../pages/favorits/favorites/Favoritescontext';
import './card1.css';
import { Link } from 'react-router-dom';
const cardData = [
  {
    id: 1,
    imageSrc: 'pc.png',
    title: 'pc gamer1',

  },
  {
    id: 2,
    imageSrc: 'pc.png',
    title: 'pc gamer 2',
  
  },
  {
    id: 3,
    imageSrc: 'pc.png',
    title: 'pc gamer3',
   
  },
  {
    id: 3,
    imageSrc: 'pc.png',
    title: 'pc gamer3',
   
  }, {
    id: 3,
    imageSrc: 'pc.png',
    title: 'pc gamer3',
   
  }, {
    id: 3,
    imageSrc: 'pc.png',
    title: 'pc gamer3',
   
  }, {
    id: 3,
    imageSrc: 'pc.png',
    title: 'pc gamer3',
    
   
  },
  {
    id: 3,
    imageSrc: 'pc.png',
    title: 'pc gamer3',
   
  },
  {
    id: 3,
    imageSrc: 'pc.png',
    title: 'pc gamer3',
   
  },
  
];


function CardList() {

  const { addFavorite, favorites, removeFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteStatus, setFavoriteStatus] = useState({});

  const handleToggleFavorite = (item) => {
    if (favoriteStatus[item.nom]) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }

    setFavoriteStatus((prevStatus) => ({
      ...prevStatus,
      [item.nom]: !prevStatus[item.nom],
    }));
  };
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
    {cardData.map((card) => (
      <Card
        key={card.id}
        style={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position:'relative'  }}
      >
        <Card.Img id='p3' src={card.imageSrc} alt={card.title} />
        <IonIcon  icon={favoriteStatus[card.title] ? heart : heartOutline}id='heart'onClick={() => handleToggleFavorite(card.title)}style={{ color: isFavorite ? 'red' : 'black' }}/>
        <Card.Body>
          <Card.Title id='p12'>{card.title}</Card.Title>
          <div className='add'>
                <IonIcon icon={cartOutline} id='iconcart' />
                <p>Add to cart</p>
              </div>
        </Card.Body>
      </Card>
    ))}
  </div>
      
  );
}

export default CardList;