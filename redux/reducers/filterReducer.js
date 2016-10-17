import { addons } from 'react';

const initialState = '';

export const filter = (state = initialState, action) => {
  switch(action.type){
    case 'SET_FILTER':
      return action.text;
    default:
      return state;
  }
};
