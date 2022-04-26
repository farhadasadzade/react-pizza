import './App.css';
import { Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Home from './Components/Pages/Home'
import Cart from './Components/Pages/Cart'

import { useEffect } from 'react';
import { useDispatch } from 'react-redux'

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
