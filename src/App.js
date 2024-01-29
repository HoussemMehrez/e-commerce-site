
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Gooddeals from './pages/gooddeals/Gooddeals';
import Favorits from './pages/favorits/Favorits';
import Smartphone from './pages/smartphone/Smartphone'
import cart from './pages/cart/cart'
import { FavoritesProvider } from './pages/favorits/favorites/Favoritescontext' ;
import Cart from './pages/cart/cart'; 
import Orderdetails from './pages/payement/Orderdetails'

const App = () => {
  return (
    <Router>
      <FavoritesProvider>
      <div>
       <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gooddeal" element={<Gooddeals />} />
          <Route path="/favorits" element={<Favorits />} />
          <Route path="/smartphone" element={<Smartphone />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order_details" element={<Orderdetails />} />

        </Routes>
        

        <Footer />
      </div>
      </FavoritesProvider>
    </Router>
  );
};

export default App;