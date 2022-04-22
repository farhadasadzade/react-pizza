import React from 'react';
import Categories from '../Categories';
import SortPopup from '../SortPopup';
import PizzaBlock from '../PizzaBlock';
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortNames = [{name: 'популярности', type: 'popular'}, {name: 'по цене', type: 'price'}, {name: 'по алфавиту', type: 'alphabet'}]

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])

  return (
    <div>
      <nav className="nav">
        <Categories onClickItem={onSelectCategory} 
        items={categoryNames} />
        <SortPopup items={sortNames} />
      </nav>
      <h2 className="title">Все пиццы</h2>
      <div className="main">
        {items &&
        items.map((item) => (
          <PizzaBlock key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
