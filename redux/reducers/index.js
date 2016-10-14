import { combineReducers } from 'redux';

import { stocks } from './stockReducer';
import { filter } from './filterReducer';

const reducers = combineReducers({
  stocks,
  filter,
})

export default reducers;
