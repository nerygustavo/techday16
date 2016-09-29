import React, { Component, addons } from 'react';

import Card from './Card/Card';

import {getStockData} from '../services/StockService';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: "",
      stocks: [],
    }
  }
  componentDidMount(){
    getStockData(['"TSLA"', '"FB"', '"IBM"', '"GOOG"', '"MSFT"', '"AMZN"', '"TWTR"','"YHOO"','"LNKD"','"ORCL"','"EBAY"'])
    .then(data => {
      this.setState({stocks: data});
    });
  }

  handleFilter = (event) => {
    this.setState({filter: event.target.value});
  };

  render(){
    const {filter, stocks} = this.state;

    return (
      <div>
        <input type="text" onChange={this.handleFilter}/>
        <div className="app">
          {stocks
            .filter(stock => stock.symbol.toLowerCase().indexOf(filter.toLowerCase()) >= 0 || stock.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
            .map((stock, idx) => <Card key={idx} {...stock}/>)}
        </div>
      </div>
    );
  }
}

export default App;
