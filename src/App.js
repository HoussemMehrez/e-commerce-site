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
import Description from './components/description/description';
import Creditpayement from './pages/payement/Creditpayement';
import Dashbord from './admin/Dashbord/Dashbord';
import Orderlist from './admin/Orderlist/Orderlist';
import Myaccount from './admin/my_account/my_account';
import Error from './pages/error/error';
import Sign from './pages/sign/sign';
import Customer from './admin/customer/customer';
import Signup from './pages/signup/Signup';
import YourShoppingCartComponent from './pages/cart/cart';
import AdminList from './admin/adminlist/adminlist';
import UserList from './admin/admin_user_list/userlist';
import Navbaradmin from './components/navbar/navbaradmin';
import Bestsellers from './pages/bestsellers/bestsellers1';

const App = () => {
  return (
   
      <FavoritesProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gooddeal" element={<Gooddeals />} />
            <Route path="/bestsellers" element={<Bestsellers />} />
            <Route path="/favorits" element={<Favorits />} />
            <Route path="/smartphone" element={<Smartphone />} />
            <Route path="/cart" element={<YourShoppingCartComponent />} />
            <Route path="/cart/order_details" element={<Orderdetails />} />
            <Route path="/cart/order_details/payement-by-credit" element={<Creditpayement />} />
            <Route path="/admin/Dashbord" element={<Dashbord />} />
            <Route path="/admin/Orderlist" element={<Orderlist />} />
            <Route path="/description" element={<Description />} />
            <Route path="/my_account" element={<Myaccount />} />
            <Route path="/error" element={<Error />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/adminlist" element={<AdminList />} />
            <Route path="/userlist" element={<UserList />} />
            <Route path="/navbar1" element={<Navbaradmin />} />
          </Routes>
          <Footer />
        </div>
      </FavoritesProvider>
   
  );
};

export default App;
