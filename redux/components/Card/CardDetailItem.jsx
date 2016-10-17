import React from 'react';

const CardDetailItem = ({name, value}) => (
  <li>
    <div className="name">{name}</div>
    <div className="value">{value}</div>
  </li>
);

export default CardDetailItem;
