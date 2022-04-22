import React, { useState } from 'react';

const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index)
  }

  return (
    <ul className="filter">
      <li
        className={`filter__link ${activeItem === null ? 'filter-active' : ''}`}
        onClick={() => onSelectItem(null)}>
        Все
      </li>
      {items.map((item, index) => (
        <li
          className={`filter__link ${activeItem === index ? 'filter-active' : ''}`}
          onClick={() => onSelectItem(index)}
          key={`${index}_${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
})

export default Categories;
