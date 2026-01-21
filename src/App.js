// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import './App.css';
import HomePage from './FrontEnd/components/Homepage/HomePage';
import AboutPage from './FrontEnd/components/AboutPage/AboutPage';
import ShopCategory from './FrontEnd/components/ShopCategory/ShopCategory';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />





        
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<HomePage />} />
        <Route path="/shop/:category" element={<ShopCategory />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;