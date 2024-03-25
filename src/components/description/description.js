import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity as increaseQty, decreaseQuantity as decreaseQty } from '../../redux/slices/descripttion'; // Utilisation d'alias lors de l'importation

import './description.css'
import { Link } from 'react-router-dom';

const Description = ({}) => {
  const dispatch = useDispatch();

  // Utilisation de useSelector pour accéder à la quantité depuis le store Redux
  const quantity = useSelector((store) => store?.quantityPrice?.quantity);

  const increaseQuantity = () => {
    dispatch(increaseQty()); // Dispatch de l'action increaseQuantity
  };

  const decreaseQuantity = () => {
    dispatch(decreaseQty()); // Dispatch de l'action decreaseQuantity
  };

  const [price, setPrice] = useState(2100);

  const totalPrice = price * quantity;

  return (
    <div>
      <div id='titre'>
        <h3>NAME OF ARTICLE</h3>
        <hr />
      </div>
      <div id='sous_titre'>
        <div id='imeg'>
          <img src='pc.png' alt='nom' width='100%' />
        </div>
        <div id='des'>
          <h3 id='des_art'>
            Description of article:<br />
            ..............................<br />
            ..............................<br />
            ..............................<br />
            ..............................<br />
            ..............................<br />
          </h3>
        </div>
        <div id='nom_art'>
          <h4 id='nom'>ASUS</h4>
          <img id='imag' src='asus-logo.jpg' alt='img' width='50%' />
          <h4 id='price'>{totalPrice} DT</h4>
          <div id='brand'>
            <h4>Availability:</h4>
          </div>
          <div>
            <h5 id='stock'>en stock</h5>
          </div>
          <div id='quantity'>
            <h4 id='quan'>QUANTITY:{quantity}</h4> 
            <div className="quantity-controls">
              <button onClick={increaseQuantity}>
                <span role="img" aria-label="Increase Quantity">▲</span>
              </button>
              <button onClick={decreaseQuantity}>
                <span role="img" aria-label="Decrease Quantity">▼</span>
              </button>
            </div>
          </div>
          <div>
              <button id='add'>Add to cart </button>
          </div>
        </div>
        <div id='technical'>
          <h3>
            Technical file:<br />
            ..............................<br />
            ..............................<br />
            ..............................<br />
            ..............................<br />
            ..............................
          </h3>
        </div>
      </div>
      <h1>
        You may also like
      </h1>
      
    </div>
  );
};

export default Description;
