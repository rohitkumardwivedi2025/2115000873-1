import React from 'react';

function SmoothieCard({ smoothie }) {
  return (
    <div className='smoothie-card-main'>
      <div className="visual">
        <img src={smoothie.imageUrl} />
      </div>
      <div className="contents">
        <div className="heading">{smoothie.productName}</div>
        <div className="sub-heading">{smoothie.price}</div>
        <div className="sub-heading">{smoothie.rating}</div>
        <div className="sub-heading">{smoothie.availability}</div>
      </div>
    </div>
  );
}

export default SmoothieCard;
