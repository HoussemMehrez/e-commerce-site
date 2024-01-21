import React from 'react';
import { IonIcon } from '@ionic/react';
import { heartOutline, cartOutline } from 'ionicons/icons';
import './Gooddeals.css';

const Carditemm = ({ data }) => {
    
    
    return (
        <div className="cardtot">
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className='cardimg'>
                <img src={item.img} alt={item.nom} />
                <IonIcon icon={heartOutline} id='heart' />
              </div>
              <p>{item.nom}</p>
              <p>{item.prix}</p>
              <p id='find'><u>find in store</u></p>
              <div className='add'>
                <IonIcon icon={cartOutline} id='iconcart' />
                <p>Add to cart</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

export default Carditemm;
