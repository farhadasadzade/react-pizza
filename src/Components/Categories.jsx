import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <ul className="filter">
      <li
        className={`filter__link ${activeItem === null ? 'filter-active' : ''}`}
        onClick={() => setActiveItem(null)}>
        Все
      </li>
      {items.map((item, index) => (
        <li
          className={`filter__link ${activeItem === index ? 'filter-active' : ''}`}
          onClick={() => setActiveItem(index)}
          key={`${index}_${index}`}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
