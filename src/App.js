

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
import Description from './components/carditem/description/description';
import GoodDealsAdmin from './admin/GoodDealsAdmin/GoodDealsAdmin'




import Creditpayement from './pages/payement/Creditpayement';
import Dashbord from './admin/Dashbord/Dashbord';
import Orderlist from './admin/Orderlist/Orderlist';
import Signup from './pages/signup/Signup';


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
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/order_details" element={<Orderdetails />} />
          <Route path="/cart/order_details/payement-by-credit" element={<Creditpayement />} />
          <Route path="/admin/Dashbord" element={<Dashbord />} />
          <Route path="/admin/Orderlist" element={<Orderlist></Orderlist>} />
          <Route path="/description" element={<Description/>} />
          <Route path="/admin/GoodDealsAdmin" element={<GoodDealsAdmin/>} />

        </Routes>
        

        <Footer />
      </div>

      </FavoritesProvider>
    </Router>
  );
};

export default App;
