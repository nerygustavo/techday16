import { getStockData } from '../services/StockService';

import { STOCK_SYMBOLS } from '../constants/stockConstants';

export const setStocks = (data) => ({
  type: 'SET_STOCKS',
  data,
});

export const loadStocks = () => (dispatch) => {
  dispatch(setIsLoading(true));
  getStockData(STOCK_SYMBOLS).then(data => {
    dispatch(setStocks(data));
    dispatch(setIsLoading(false));
  });
};

export const setIsLoading = (value) => ({
  type: 'SET_IS_LOADING',
  value,
});
