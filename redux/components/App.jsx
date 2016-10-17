import React, { Component, addons } from 'react';

import { connect } from 'react-redux';

import Card from './Card/Card';

import { getStockData, filterStock } from '../services/StockService';

import { loadStocks } from '../actions/stockActions';
import { setFilter } from '../actions/filterActions';

class App extends Component {
  componentDidMount(){
    this.props.loadStocks();
  }

  handleFilter = (event) => {
    this.props.setStockFilter(event.target.value);
  };

  render(){
    const {filterText, stocks: {isLoading, data: stocksArray}} = this.props;

    const filteredStocks = stocksArray
      .filter(stock => filterStock(stock, filterText))
      .map((stock, idx) => <Card key={idx} {...stock}/>)

    const content = (
      <div className="main">
        {
          (isLoading) ? 
          <div className="loading">Loading.....</div> :
          <div>
            <div className="main">
              <div className="filter">
                <input type="text" onChange={this.handleFilter}/>
              </div>  
              <div className="app">
                {filteredStocks}
              </div>
            </div>
          </div>
        }
      </div>);

    return (content);
  };
}

const mapStateToProps = (state) => ({
  stocks: state.stocks,
  filterText: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  loadStocks: () => dispatch(loadStocks()),
  setStockFilter: (text) => dispatch(setFilter(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);


