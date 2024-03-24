import {favorites} from '../../redux/slices/card1data'

import React from 'react';
import { Card } from 'react-bootstrap';
import { heartOutline, cartOutline, heart } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/slices/card1data';
import './card1.css';

function CardList() {
  const dispatch = useDispatch();
  const cardData = useSelector((store) => store?.favorites?.cardData); 
  const favorites = useSelector((store) => store?.favorites?.cardData || []); 

  const handleToggleFavorite = (item) => {
    const isFavorite = favorites.some((favItem) => favItem.id === item.id);
    if (isFavorite) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      {cardData.map((card) => {
        const isFavorite = favorites.some((fav) => fav.id === card.id); 
        return (
          <Card
            key={card.id}
            style={{
              width: '100%',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              position: 'relative',
            }}
          >
            <Card.Img id="p3" src={card.imageSrc} alt={card.title} />
            <IonIcon
              icon={isFavorite ?  heartOutline: heart}
              id="heart"
              onClick={() => handleToggleFavorite(card)}
              style={{ color: isFavorite ? 'black' : 'red' }} // Color set to red if it's a favorite
            />
            <Card.Body>
              <Card.Title id="p12">{card.title}</Card.Title>
              <div className="add">
                <IonIcon icon={cartOutline} id="iconcart" />
                <p>Add to cart</p>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default CardList;
