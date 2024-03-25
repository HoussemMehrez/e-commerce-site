import React, { useState } from 'react';
import ProductItem from '../../components/productitem/productitem';
import "./cart.css";
import CardList from '../../components/cardlist/cardlist';
import { CardData } from "../../components/carddata/cardata"
import { Link } from 'react-router-dom';
const YourShoppingCartComponent = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product number 1', description: 'This is a section of descriptions...', liked: false, quantity: 1, price: 100, imageSrc: 'pc.png' },
    { id: 2, name: 'Product number 2', description: 'This is a section of descriptions...', liked: false, quantity: 1, price: 150, imageSrc: 'pc.png' },
    { id: 3, name: 'Product number 3', description: 'This is a section of descriptions...', liked: false, quantity: 1, price: 200, imageSrc: 'pc.png' },
    { id: 4, name: 'Product number 4', description: 'This is a section of descriptions...', liked: false, quantity: 1, price: 250, imageSrc: 'pc.png' },
  ]);

  const toggleLike = (itemId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === itemId ? { ...product, liked: !product.liked } : product
      )
    );
  };

  const updateQuantity = (itemId, amount) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === itemId
          ? { ...product, quantity: Math.max(1, product.quantity + amount) }
          : product
      )
    );
  };

  const removeItem = (itemId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== itemId));
  };

  const getTotalAmount = () => {
    return products.reduce((total, product) => total + product.quantity * product.price, 0);
  };

  return (
    <div>
        <div className="cart-title">
          <h1>Cart</h1>
          <p>Free delivery from 100DT of purchase</p>
        </div>
      <div className="cart-container">
        <div className="product-list">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.quantity * product.price}
              liked={product.liked}
              quantity={product.quantity}
              imageSrc={product.imageSrc}
              toggleLike={() => toggleLike(product.id)}
              updateQuantity={(amount) => updateQuantity(product.id, amount)}
              removeItem={() => removeItem(product.id)}
            />
          ))}
        </div>
        <div class="flex-container">
        <div className="total-price-section">
          <div className="total-amount">
            <h2>Total: </h2>
            <h2 className='total-a'>${getTotalAmount().toFixed(2)}</h2>
            <Link to ='/cart/order_details'>
            <button className="finish-order-btn">Finish the order</button>
            </Link>
          </div>

          <div className="payment-methods">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="Payment Method 0" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Payment Method 1" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Payment Method 2" />
          </div>

          <div className="description-section">
            <p>This is a section of descriptions...</p>
          </div>
        </div>

        <button className="customer-service-btn">Customer Service</button>
      </div>
    </div>
    <div>
      <h1 id="ymal">
        Your May Also Like      
      </h1>
    </div>
    <CardList>
      cardData={ CardData} 
    </CardList>
    <h1 id="ymal">
        Popular Articles      
    </h1>
    <CardList>
      cardData={ CardData} 
    </CardList>
    </div>
  );
};

export default YourShoppingCartComponent;
