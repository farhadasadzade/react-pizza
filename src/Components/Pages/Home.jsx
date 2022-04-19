import React from 'react';
import Categories from '../Categories';
import SortPopup from '../SortPopup';
import PizzaBlock from '../PizzaBlock';

const Home = ({ pizzas }) => {
  return (
    <div>
      <nav className="nav">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'по цене', 'по алфавиту']} />
      </nav>
      <h2 className="title">Все пиццы</h2>
      <div className="main">
        {pizzas.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
