import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Gooddeals from './pages/gooddeals/Gooddeals1';
import Favorits from './pages/favorits/Favorits';
import Smartphone from './pages/smartphone/Smartphone';
import { FavoritesProvider } from './pages/favorits/favorites/Favoritescontext';
import Cart from './pages/cart/cart';
import Orderdetails from './pages/payement/Orderdetails';

import Creditpayement from './pages/payement/Creditpayement';
import Dashbord from './admin/Dashbord/Dashbord';
import Orderlist from './admin/Orderlist/Orderlist';
import Descripttion from './components/description/description';
import Bestsellers from './pages/bestsellers/bestsellers1';
import Sign from './pages/sign/sign';
import Navbaradmin from './components/navbar/navbaradmin';


const App = () => {
  return (
   
      <FavoritesProvider>
        <div>
          <Navbaradmin/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gooddeal" element={<Gooddeals />} />
          <Route path="/favorits" element={<Favorits />} />
          <Route path="/smartphone" element={<Smartphone />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order_details" element={<Orderdetails />} />
          <Route path="/cart/order_details/payement-by-credit" element={<Creditpayement />} />
          <Route path="/admin/Dashbord" element={<Dashbord />} />
          <Route path="/admin/Orderlist" element={<Orderlist></Orderlist>} />
          <Route path="/description" element={<Descripttion/>} />
          <Route path="/bestsellers" element={<Bestsellers/>} />
          <Route path="/sign" element={<Sign/>} />
          

        </Routes>
        

        <Footer />
      </div>

      </FavoritesProvider>
   
  );
};

export default App;
