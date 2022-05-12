import React from 'react';
import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';

import CartItem from './../CartItem';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../../redux/actions/cart';

const Cart = () => {
    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  
    const addedPizzas = Object.keys(items).map((key) => {
      return items[key].items[0];
    });
  
    const onClearCart = () => {
      if (window.confirm('Вы действительно хотите очистить корзину?')) {
        dispatch(clearCart());
      }
    };
  
    const onRemoveItem = (id) => {
      if (window.confirm('Вы действительно хотите удалить?')) {
        dispatch(removeCartItem(id));
      }
    };
  
    const onPlusItem = (id) => {
      dispatch(plusCartItem(id));
    };
  
    const onMinusItem = (id) => {
      dispatch(minusCartItem(id));
    };
  
    const onClickOrder = () => {
      console.log('ВАШ ЗАКАЗ', items);
    };
  
  
  return <div className="cart__main">
  <div className="cart__header">
      <div className="cart__header-logo">
          <i className="fa-solid fa-cart-shopping"></i> Корзина
      </div>
      <button className="cart__header-btn"><i className="fa-regular fa-trash-can"></i> Очистить корзину</button>
  </div>
  {addedPizzas.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                img={obj.imageUrl}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
  <div className="cart__pizza-count">
      <div>
          Всего пицц: {totalCount} шт.
      </div>
      <div>
          Сумма заказа: <span>{totalPrice} ₽</span>
      </div>
  </div>
  <div className="cart__pizza-buy">
      <Link to="/"><button>Вернуться назад</button></Link>
      <button onClick={onClickOrder}>Оплатить сейчас</button>
  </div>
</div>;
};

export default Cart;
