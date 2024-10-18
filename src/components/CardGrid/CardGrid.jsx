import React from 'react';
import Card from '../Card/Card.jsx';
import './CardGrid.scss'

const cardData = [
  { title: 'Kids Help Phone', tag: 'Children & youth', imageUrl: 'https://media.graphassets.com/resize=width:640/output=format:jpg/53L1l80PQTOpmPvT4dsv' },
  { title: 'CHU Sainte-Justine', tag: 'Capacity building', imageUrl: 'https://media.graphassets.com/resize=width:640/output=format:jpg/RCt9BCwQHaktO23JT86u' },
  { title: 'Wabanaki Two-Spirit Alliance', tag: 'Indigenous wellness', imageUrl: 'https://media.graphassets.com/resize=width:640/output=format:jpg/cGC3jSPQBO64pdUyvtQ1' },
];

const CardGrid = () => {
  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card key={index} title={card.title} tag={card.tag} imageUrl={card.imageUrl} />
      ))}
    </div>
  );
};

export default CardGrid;
