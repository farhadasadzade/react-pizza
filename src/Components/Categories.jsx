import React, { useState } from 'react';

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {

  const onSelectItem = (index) => {
    onClickItem(index)
  }

  return (
    <ul className="filter">
      <li
        className={`filter__link ${activeCategory === null ? 'filter-active' : ''}`}
        onClick={() => onSelectItem(null)}>
        Все
      </li>
      {items.map((item, index) => (
        <li
          className={`filter__link ${activeCategory === index ? 'filter-active' : ''}`}
          onClick={() => onSelectItem(index)}
          key={`${index}_${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
})

export default Categories;
