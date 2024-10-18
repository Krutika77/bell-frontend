import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card.jsx";
import "./CardGrid.scss";

const CardGrid = () => {
  const [organizations, setOrganizations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedFocus, setSelectedFocus] = useState("");
  const [selectedDemographics, setSelectedDemographics] = useState("");

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get("http://localhost:5000/organizations");
        setOrganizations(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchOrganizations();
  }, []);

  const filteredOrganizations = organizations.filter((org) => {
    const matchesLocation =
      !selectedLocation || org.location === selectedLocation;
    const matchesFocus =
      !selectedFocus || JSON.parse(org.project_focus).includes(selectedFocus);
    const matchesDemographics =
      !selectedDemographics ||
      JSON.parse(org.target_demographics).includes(selectedDemographics);
    return matchesLocation && matchesFocus && matchesDemographics;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrganizations = filteredOrganizations.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredOrganizations.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLocationChange = (e) => setSelectedLocation(e.target.value);
  const handleFocusChange = (e) => setSelectedFocus(e.target.value);
  const handleDemographicsChange = (e) =>
    setSelectedDemographics(e.target.value);

  const handleAllClick = () => {
    setSelectedLocation("");
    setSelectedFocus("");
    setSelectedDemographics("");
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="filter-container">
        <button onClick={handleAllClick} className="filter-all">
          All
        </button>

        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          className="filter-option"
        >
          <option value="">Select Location</option>
          {[...new Set(organizations.map((org) => org.location))].map(
            (location) => (
              <option key={location} value={location}>
                {location}
              </option>
            )
          )}
        </select>

        <select
          value={selectedFocus}
          onChange={handleFocusChange}
          className="filter-option"
        >
          <option value="">Select Project Focus</option>
          {[
            ...new Set(
              organizations.flatMap((org) => JSON.parse(org.project_focus))
            ),
          ].map((focus) => (
            <option key={focus} value={focus}>
              {focus}
            </option>
          ))}
        </select>

        <select
          value={selectedDemographics}
          onChange={handleDemographicsChange}
          className="filter-option"
        >
          <option value="">Select Target Demographics</option>
          {[
            ...new Set(
              organizations.flatMap((org) =>
                JSON.parse(org.target_demographics)
              )
            ),
          ].map((demographics) => (
            <option key={demographics} value={demographics}>
              {demographics}
            </option>
          ))}
        </select>
      </div>

      <div className="card-grid">
        {currentOrganizations.map((org) => (
          <Card
            key={org.id}
            title={org.name}
            tags={JSON.parse(org.project_focus)}
            imageUrl={org.image_url}
            link={org.website}
          />
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          ← Prev
        </button>
        <span>
          Page {currentPage} of{" "}
          {Math.ceil(filteredOrganizations.length / itemsPerPage)}
        </span>
        <button
          onClick={nextPage}
          disabled={
            currentPage ===
            Math.ceil(filteredOrganizations.length / itemsPerPage)
          }
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default CardGrid;
