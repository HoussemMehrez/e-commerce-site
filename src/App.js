
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Gooddeals from './pages/Gooddeals';
import Favorits from './pages/Favorits';
import { FavoritesProvider } from './components/Favoritescontext' ;

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
        </Routes>

        <Footer />
      </div>
      </FavoritesProvider>
    </Router>
  );
};

export default App;