// PlantSearch.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PlantSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { plantName } = useParams();

  // Function to handle the search and fetch data
  const handleSearch = async () => {
    try {
      const response = await axios.get(`/search/${searchTerm}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching for plants:', error);
    }
  };

  return (
    <div>
      <h2>Plant Search</h2>
      <input
        type="text"
        placeholder="Enter plant name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h3>Search Results for: {plantName}</h3>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>
            <p>Name: {result.name}</p>
            {/* Display other plant information here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlantSearch;
