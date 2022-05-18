import React from 'react';


const CartItem = ({ id, name, type, size, totalPrice, totalCount, onRemove, onMinus, onPlus, img }) => {
    const handleRemoveClick = () => {
        onRemove(id);
      };
    
      const handlePlusItem = () => {
        onPlus(id);
      };
    
      const handleMinusItem = () => {
        onMinus(id);
      };

      return (
<div className="cart__pizza">
      <div className="cart__pizza-info">
          <img className="cart__pizza-img" src={img} alt="pizza" />
          <div className="cart__pizza-description">
              <h3 className="cart__pizza-name">{name}</h3>
              <p className="cart__pizza-text">{type}, {size} см.</p>
          </div>
      </div>
      <div className="cart__pizza-amount">
          <button onClick={handleMinusItem} className="cart__pizza-btn">-</button>
          <span>{totalCount}</span>
          <button onClick={handlePlusItem} className="cart__pizza-btn">+</button>
      </div>
      <p className="cart__pizza-cost">{totalPrice}</p>
      <button onClick={handleRemoveClick} className="cart__pizza-delete">X</button>
  </div>
      )
      }

export default CartItem
