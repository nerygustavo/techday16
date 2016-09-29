import React from 'react';

const CardImage = ({image}) => (
  <div className="image">
    <img src={`./images/${image}`} />
  </div>
);

export default CardImage;
