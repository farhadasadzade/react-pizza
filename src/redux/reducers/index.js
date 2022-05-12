import { combineReducers } from 'redux';

import pizzasReducer from './pizzas'
import filtersReducer from './filters'
import cartReducer from './cart'

const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
    cart: cartReducer
})

export default rootReducer;