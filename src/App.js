
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Gooddeal from './pages/Gooddeal';
import Navbar from './components/navbar';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <div>
       <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gooddeal" element={<Gooddeal />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;