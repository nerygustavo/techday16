import React from 'react';

import CardDetailItem from './CardDetailItem';

const CardDetails = ({change, changeinPercent, volume, dayHigh, dayLow}) => (
  <ul className="details">
    <CardDetailItem name="Change" value={change} />
    <CardDetailItem name="Change (%)" value={changeinPercent} />
    <CardDetailItem name="Volume" value={volume} />
    <CardDetailItem name="Max" value={dayHigh} />
    <CardDetailItem name="Min" value={dayLow} />
  </ul>
);

export default CardDetails;
