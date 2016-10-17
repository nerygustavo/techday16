import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

const Card = ({name, symbol, price, change, changeinPercent, volume, dayHigh, dayLow, image}) => (
  <div className="card">
    <CardHeader symbol={symbol} price={price} />
    <CardBody
      change={change}
      changeinPercent={changeinPercent}
      volume={volume}
      dayHigh={dayHigh}
      dayLow={dayLow}
      image={image}
    />
    <CardFooter name={name} />
  </div>
);

export default Card;
