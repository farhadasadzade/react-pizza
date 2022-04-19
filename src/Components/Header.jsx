import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import Button from './Button';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="header__logo-img" src={logo} alt="logo" />
          <div className="header__logo-content">
            <h1 className="header__logo-title">REACT PIZZA</h1>
            <p className="header__logo-text">самая вкусная пицца во вселенной</p>
          </div>
        </div>
      </Link>
      <Button header>
        <pre>
          {' '}
          520 ₽ | <i className="fa-solid fa-cart-shopping"></i> 3{' '}
        </pre>
      </Button>
    </header>
  );
};

export default Header;
