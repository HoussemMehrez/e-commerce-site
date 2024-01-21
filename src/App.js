import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Carditem from './components/Carditem';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Carditem />
    </div>
  );
}

export default App;
