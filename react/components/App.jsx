import React, { Component, addons } from 'react';

import Card from './Card/Card';

import {getStockData} from '../services/StockService';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stocks: [],
    }
  }
  componentDidMount(){
    getStockData(['"TSLA"', '"FB"', '"IBM"', '"GOOG"', '"MSFT"', '"AMZN"', '"TWTR"','"YHOO"','"LNKD"','"ORCL"','"EBAY"'])
    .then(data => {
      this.setState({stocks: data});
    });
  }
  render(){
    return (
      <div className="app">{this.state.stocks.map((stock, idx) => <Card key={idx} {...stock}/>)}</div>
    );
  }
}

export default App;

