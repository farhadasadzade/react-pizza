import React, { useState } from 'react';
import PropTypes from 'prop-types'
import classNames from 'classnames'

function PizzaBlock({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount }) {
  const typeNames = ['тонкое', 'традиционное'];
  const sizeNames = [26, 30, 40]

  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  const setOnSelectType = (index) => {
    setActiveType(index);
  };

  const setOnSelectSize = (index) => {
    setActiveSize(index);
  };

  const onAddPizza = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      size: sizeNames[activeSize],
      type: typeNames[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="main__pizza">
      <div className="main__pizza-info">
        <img className="main__pizza-img" src={imageUrl} alt="pizza" />
      </div>
      <h3 className="main__pizza-title">{name}</h3>
      <div className="main__pizza-properties">
        <div className="main__pizza-height">
          {typeNames.map((type, index) => (
            <a
              key={index}
              onClick={() => setOnSelectType(index)}
              className={classNames('main__pizza-heightlink', {
                'pizza-active': activeType === index,
                'pizza-disabled': !types.includes(index)
              })}>
              {type}
            </a>
          ))}
        </div>
        <div className="main__pizza-size">
        {sizeNames.map((size, index) => (
            <a
              key={index}
              onClick={() => setOnSelectSize(index)}
              className={classNames('main__pizza-sizelink', {
                'pizza-active': activeSize === index,
                'pizza-disabled': !sizes.includes(size)
              })}>
              {`${size} см.`}
            </a>
          ))}
        </div>
      </div>
      <div className="main__pizza-buy">
        <h3 className="main__pizza-price">от {price} ₽</h3>
        <button onClick={onAddPizza} className={classNames('main__pizza-btn', {'pizza-btn-active': addedCount > 0})}>
          <i className="fa-solid fa-plus"></i> Добавить {addedCount && <span className="pizza-btn-count">{<i>{addedCount}</i>}</span>}
        </button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
};

PizzaBlock.defaultProps = {
  name: 'Pizza',
  price: 0,
  sizes: [],
  types: [],
};

export default PizzaBlock;
