import React from 'react';

const Button = ({ onClick, header, children }) => {
  return (
    <a href="cart.html">
      <button onClick={onClick} className={header ? 'header__btn' : 'main__pizza-btn'}>
        {children}
      </button>
    </a>
  );
};

export default Button;
