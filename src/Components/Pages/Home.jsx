import React from 'react';
import Categories from '../Categories';
import SortPopup from '../SortPopup';
import PizzaBlock from '../PizzaBlock';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setCategory, setSortBy } from '../../redux/actions/filters'
import { fetchPizzas } from '../../redux/actions/pizzas'
import ContentLoader from "react-content-loader"

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortNames = [{title: 'популярности', type: 'rating'}, {title: 'по цене', type: 'price'}, {title: 'по алфавиту', type: 'name'}]

const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const loadingBlocks = Array(10).fill(<ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="132" cy="142" r="110" /> 
    <rect x="0" y="273" rx="6" ry="6" width="280" height="25" /> 
    <rect x="1" y="312" rx="6" ry="6" width="280" height="85" /> 
    <rect x="2" y="409" rx="6" ry="6" width="95" height="30" /> 
    <rect x="133" y="405" rx="19" ry="19" width="148" height="35" />
    </ContentLoader>)
  
  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [category])

  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [sortBy])

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  return (
    <div>
      <nav className="nav">
        <Categories onClickItem={onSelectCategory} 
        items={categoryNames} activeCategory={category}/>
        <SortPopup activeSortType={sortBy} items={sortNames} onClickSortType={onSelectSortBy} />
      </nav>
      <h2 className="title">Все пиццы</h2>
      <div className="main">
        {isLoaded ?
                items.map((item) => (
                  <PizzaBlock key={item.id} isLoading={true} {...item} />
                )) 
                : loadingBlocks
          }
      </div>
    </div>
  );
};

export default Home;
