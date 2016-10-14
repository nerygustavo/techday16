import React from 'react';

const Card = ({name, symbol, price, change, changeinPercent, volume, dayHigh, dayLow, image}) => (
  <div className="card">
    <div className="header">
      <div className="symbol">{symbol}</div>
      <div className="price">{price}</div>
    </div>
    <div className="body">
      <ul className="details">
        <li>
          <div className="name">Change</div>
          <div className="value">{change}</div>
        </li>
        <li>
          <div className="name">Change (%)</div>
          <div className="value">{changeinPercent}</div>
        </li>
        <li>
          <div className="name">Volume</div>
          <div className="value">{volume}</div>
        </li>
        <li>
          <div className="name">Max</div>
          <div className="value">{dayHigh}</div>
        </li>
        <li>
          <div className="name">Min</div>
          <div className="value">{dayLow}</div>
        </li>
      </ul>
      <div className="image">
        <img src={`./images/${image}`} />
      </div>
    </div>

    <div className="footer">
      {name}
    </div>
  </div>
);

export default Card;
