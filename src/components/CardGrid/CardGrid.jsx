import React, { useState } from 'react';
import Card from '../Card/Card.jsx';
import './CardGrid.scss';

const cardData = [
  { title: 'Kids Help Phone', action: 'resources', tag: 'Children & youth', imageUrl: 'https://media.graphassets.com/resize=width:640/output=format:jpg/53L1l80PQTOpmPvT4dsv' },
  { title: 'CHU Sainte-Justine', action: 'learn', tag: 'Capacity building', imageUrl: 'https://media.graphassets.com/resize=width:640/output=format:jpg/RCt9BCwQHaktO23JT86u' },
  { title: 'Wabanaki Two-Spirit Alliance', action: 'volunteer', tag: 'Indigenous wellness', imageUrl: 'https://media.graphassets.com/resize=width:640/output=format:jpg/cGC3jSPQBO64pdUyvtQ1' },
];

const categories = Array.from(new Set(cardData.map(card => card.tag)));
const actions = Array.from(new Set(cardData.map(card => card.action)));

const CardGrid = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedActions, setSelectedActions] = useState([]);
  const [selectedAction, setSelectedAction] = useState(''); 
  const [selectedCategory, setSelectedCategory] = useState(''); 

  const filteredCards = cardData.filter(card => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(card.tag);
    const matchesAction = selectedActions.length === 0 || selectedActions.includes(card.action);
    
    return matchesCategory && matchesAction; 
  });

  const handleAllClick = () => {
    setSelectedCategories([]); 
    setSelectedActions([]); 
    setSelectedAction(''); 
    setSelectedCategory(''); 
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value); 
    if (value && !selectedCategories.includes(value)) {
      setSelectedCategories(prev => [...prev, value]);
    }
  };

  const handleActionChange = (e) => {
    const value = e.target.value;
    setSelectedAction(value); 
    if (value && !selectedActions.includes(value)) {
      setSelectedActions(prev => [...prev, value]);
    }
  };

  const removeFilter = (type, value) => {
    if (type === 'category') {
      setSelectedCategories(prev => prev.filter(item => item !== value));
    } else if (type === 'action') {
      setSelectedActions(prev => prev.filter(item => item !== value));
    }
  };

  return (
    <div>
      <div className="filter-container">
        <button onClick={handleAllClick}>All</button>
        
        <select value={selectedAction} onChange={handleActionChange}>
          <option value="">Select Action</option>
          {actions.map((action) => (
            <option key={action} value={action}>
              {action}
            </option>
          ))}
        </select>

        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="active-filters">
        {selectedCategories.map((category) => (
          <span key={category} onClick={() => removeFilter('category', category)}>
            {category} ×
          </span>
        ))}
        {selectedActions.map((action) => (
          <span key={action} onClick={() => removeFilter('action', action)}>
            {action} ×
          </span>
        ))}
      </div>

      <div className="card-grid">
        {filteredCards.map((card, index) => (
          <Card key={index} title={card.title} tag={card.tag} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
