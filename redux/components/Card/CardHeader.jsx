import React from 'react';

const CardHeader = ({symbol, price}) => (
  <div className="header">
    <div className="symbol">{symbol}</div>
    <div className="price">{price}</div>
  </div>
);

export default CardHeader;
