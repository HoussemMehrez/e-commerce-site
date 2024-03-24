import React from 'react';
import Card from 'react-bootstrap/Card';
import { heart , heartOutline ,cartOutline, card } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import '../card1/card1.css';
import { CardData } from "../carddata/cardata"; 
import { CardText } from 'react-bootstrap';


function CardList() {
  return (
    <div class="CardCorps">
      {CardData.map((card) => (
        <Card
          key={card.id}
          style={{ width: '20%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', position:'relative'  }}>
          <Card.Img id='p3' src={card.imageSrc} alt={card.title} />
          <Card.Body class="Card-Body">
            <Card.Title id='p12'>{card.title}</Card.Title>
            <CardText className='Card-Text'>
              <p className='Desc'>
                {card.Desc}
              </p>
              <h4 className='Status'>
                {card.Status}
              </h4>
            </CardText>
            
          </Card.Body>
          <button className='add-btn'>
            <div className='cart-icon-btn'>
            <IonIcon icon={cartOutline} id='iconcart' />
            <p>Add to cart</p>
            </div>
          </button>
          <IonIcon
            className="heart-icon"
            icon={card.Liked ? heart : heartOutline}
            style={{ color: card.Liked ? 'red' : 'black' }}
          />
        </Card>
      ))}
    </div>
  );
}

export default CardList;