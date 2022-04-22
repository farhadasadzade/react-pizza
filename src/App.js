import './App.css';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';

import Header from './Components/Header'
import Home from './Components/Pages/Home'
import Cart from './Components/Pages/Cart'

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

import { setPizzas } from './redux/actions/pizzas'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [])

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
