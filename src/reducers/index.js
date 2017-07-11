import { combineReducers } from 'redux';
import CardsReducer from './show-cards';

const rootReducer = combineReducers({
  cards: CardsReducer
});

export default rootReducer;
