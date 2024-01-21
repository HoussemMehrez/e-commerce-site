import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Gooddeals from './components/Gooddeals';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Gooddeals />
    </div>
  );
}

export default App;
