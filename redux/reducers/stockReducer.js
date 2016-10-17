import update from 'react-addons-update';

const initialState = {
  data: [],
  isLoading: false,
}

export const stocks = (state = initialState, action) => {
  switch(action.type){
    case 'SET_STOCKS':
      return update(state, {
        data: {
          $set: action.data
        }
      });
    case 'SET_IS_LOADING':
      return update(state, {
        isLoading: {
          $set: action.value
        }
      });
    default:
      return state;
  }
};
