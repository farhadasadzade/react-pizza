import './App.css';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';

import Header from './Components/Header'
import Home from './Components/Pages/Home'
import Cart from './Components/Pages/Cart'
import { useEffect, useState } from 'react';

function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
    })
  }, [])

  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Home pizzas={pizzas} />} exact />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
