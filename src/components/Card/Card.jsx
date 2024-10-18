import React from 'react';
import './Card.scss';

const Card = ({ title, tag, imageUrl }) => {
  return (
    <div className="card">
      <div className="card__background" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="card__content">
          <h3 className="card__title">{title}</h3>
          <div className="card__tag">{tag}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
