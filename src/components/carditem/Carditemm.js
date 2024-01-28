import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { heartOutline, cartOutline ,heart} from 'ionicons/icons';
import { useFavorites } from '../favorites/Favoritescontext';


const Carditemm = ({ data }) => {
    
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
        <div className="cardtot">
          {data.map((item, index) => (
            <div key={index} className="card">
              <div className='cardimg'>
                <img src={item.img} alt={item.nom} />
                <IonIcon  icon={favoriteStatus[item.nom] ? heart : heartOutline}id='heart'onClick={() => handleToggleFavorite(item)}style={{ color: isFavorite ? 'red' : 'black' }}/>
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

export default Carditemm ;
