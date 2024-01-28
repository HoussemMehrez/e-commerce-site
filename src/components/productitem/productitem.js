import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { heart, trash } from 'ionicons/icons';
import { heartOutline} from 'ionicons/icons';

const ProductItem = ({ name, description, price, liked, quantity, imageSrc, toggleLike, updateQuantity, removeItem }) => {

  return (
    <div className="item">
      {/* Product image */}
      <img src={imageSrc} alt={name} />
      {/* Product details */}
      <div className="product-details">
        <div className="product-name">{name}</div>
        <div className='product-description'>{description}</div>
        <div className="quantity-updater">
          <div className="quantity-case">
            {/* Up arrow component */}
            <div className='flecheup'>
                <div className="up-arrow" onClick={() => updateQuantity(1)}>▲</div>
            </div>
            {/* Quantity display */}
            <div className="quantity-display">{quantity}</div>
            {/* Down arrow component */}
            <div className='flechedown'>
                <div className="down-arrow" onClick={() => updateQuantity(-1)}>▼</div>
            </div>
          </div>
          {/* Product price */}
          <div className="product-price">${price}</div>
        </div>
      </div>
      {/* Heart icon */}

      <IonIcon
        className={`heart-icon${liked ? ' liked' : ''}`}
        icon={liked ? heart : heartOutline}
        onClick={toggleLike}
        style={{ color: liked ? 'red' : 'black' }}
      />
      {/* Trashcan icon */}
      <IonIcon
        className="trashcan-icon"
        icon={trash}
        onClick={removeItem}
      />
    </div>
  );
};

export default ProductItem;