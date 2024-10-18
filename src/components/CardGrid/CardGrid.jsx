import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card.jsx';
import './CardGrid.scss';

const CardGrid = () => {
  const [organizations, setOrganizations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Set the number of items to display per page

  // Fetch data from the backend
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/organizations');
        setOrganizations(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchOrganizations();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrganizations = organizations.slice(indexOfFirstItem, indexOfLastItem);
  
  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(organizations.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="card-grid">
        {currentOrganizations.map((org) => (
          <Card 
            key={org.id} 
            title={org.name} 
            tag={org.project_focus} 
            imageUrl={org.imageUrl} 
            link={org.website} 
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ← Prev
        </button>
        <span>Page {currentPage} of {Math.ceil(organizations.length / itemsPerPage)}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(organizations.length / itemsPerPage)}>
          Next →
        </button>
      </div>
    </div>
  );
};

export default CardGrid;
