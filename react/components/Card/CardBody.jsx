import React from 'react';

import CardDetails from './CardDetails';
import CardImage from './CardImage';


const CardBody = ({change, changeinPercent, volume, dayHigh, dayLow, image}) => (
  <div className="body">
    <CardDetails change={change} changeinPercent={changeinPercent} volume={volume} dayHigh={dayHigh} dayLow={dayLow} />
    <CardImage image={image} />
  </div>
);

export default CardBody;
